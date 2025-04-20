import Journey from "./journey";

class Calculator {
  setData(rawData) {
    this.rawData = rawData.split('\n').map(item => item.split(/[\s,]+/)).map(item => {
      let [key, lat, long, timestamp] = item;
      return {
        key: key,
        lat: parseFloat(lat),
        long: parseFloat(long),
        timestamp: parseInt(timestamp)
      }
    });
    this.deviceIDs = this.rawData.reduce((unique, item) => {
      if(unique.indexOf(item.key) == -1) {
        unique.push(item.key)
      }
      return unique;
    }, [])
  }

  optimize(callback, deviceID, accelerationLimit=0.1, smoothingFactor=7) {
    let last = {};
    this.baseJourney = new Journey("Original", this.rawData.map(item => {
      if(item.key == deviceID && (item.lat != last.lat || item.long != last.long)) {
        last = item;
        return item;
      }
    }).filter(item => item));
    let accelerationFilteredJourney = this.baseJourney.copyWithFilter("Acceleration Filtered", item => item.acceleration < accelerationLimit);    
    this.optimizedJourney = new Journey("Optimized", accelerationFilteredJourney.points.map((point, index, data) => {
      let start = index - Math.ceil((smoothingFactor-1)/2);
      let end = index + Math.floor((smoothingFactor-1)/2);
      if(start < 0) start = 0;
      if(end > data.length) end = data.length;
      let avgSpeed = data.slice(start, end).reduce((sum, item) => sum + item.speed, 0)/(end-start);
      start += Math.max(0, Math.floor((avgSpeed+2)/4))
      end -= Math.max(0, Math.floor((avgSpeed)/4))

      if(end <= start)
        return point;
      let avg = data.slice(start, end).reduce((sum, item) => ({
        lat: sum.lat + item.lat,
        long: sum.long + item.long,
      }), {lat: 0, long: 0})
      return {
        lat: avg.lat/(end-start),
        long: avg.long/(end-start),
        timestamp: point.timestamp
      }
    }))
    callback(this.baseJourney, this.optimizedJourney)
  }
}

export default Calculator;



