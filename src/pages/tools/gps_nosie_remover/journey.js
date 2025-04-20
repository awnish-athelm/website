class Journey {
  constructor(name, points) {
    this.name = name;
    this.points = points;
    this.calculateMetric();
  }

  calculateMetric() {
    this.points.forEach((point, index) => {
      if(index === 0) {
        point.distance = point.speed = point.acceleration = point.timeDelta = 0;
      } else {
        let previousPoint = this.points[index - 1];
        point.distance = Math.sqrt(Math.pow(point.lat - previousPoint.lat,2)+Math.pow(point.long - previousPoint.long,2))*100000;
        point.timeDelta = (point.timestamp - previousPoint.timestamp)/1000;
        point.speed = point.distance/point.timeDelta;
        point.acceleration = Math.abs(point.speed - previousPoint.speed)/point.timeDelta;
      }
    });
  }

  getPlot() {
    let startTime = this.points[0].timestamp;
    let endTime = this.points[this.points.length-1].timestamp;
    let range = endTime - startTime + 1;
    return this.points.map(item => ({
      lat: item.lat.toFixed(7),
      lng: item.long.toFixed(7),
      color: "#" + (Math.floor(256*(endTime-item.timestamp)/range)).toString(16).padStart(2, '0') + "0000",
      timestamp: item.timestamp*1000,
    }));
  }

  getCenterAndZoom() {
    let coordinate = [180,90,-180,-90]
    this.points.forEach(point => {
      if(coordinate[0] > point.lat)
        coordinate[0] = point.lat;
      if(coordinate[1] > point.long)
        coordinate[1] = point.long;
      if(coordinate[2] < point.lat)
        coordinate[2] = point.lat;
      if(coordinate[3] < point.long)
        coordinate[3] = point.long;
    })
    return {
      defaultCenter: {
        lat: (coordinate[2] + coordinate[0])/2,
        lng: (coordinate[3] + coordinate[1])/2
      },
      defaultZoom: Math.floor(Math.log2(Math.max(coordinate[2] - coordinate[0], coordinate[3] - coordinate[1])*100000))
    }
  }

  getTotalDistance() {
    return this.points.reduce((sum, point) => sum+point.distance, 0)
  }

  printTotalDistance() {
    console.log(`${this.name} Journey\n  *  Total Distance: ${(this.getTotalDistance()/1000).toFixed(2)} kms`);
  }

  copyWithFilter(name, filter) {
    return new Journey(name, JSON.parse(JSON.stringify(this.points.filter(filter))));
  }
}

export default Journey;