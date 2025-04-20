import React from 'react';
import OffWrap from '../../components/Layout/Header/OffWrap';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import SearchModal from '../../components/Layout/Header/SearchModal';

const PaymentPolicy = () => {
    return (
        <React.Fragment>
            <OffWrap />
            <Header
                parentMenu='home'
                secondParentMenu='multipage'
                headerClass='rs-header style3 modify2 header-transparent'
                offCanvas='enable'
                activeMenu='/home'
            />
            <div className="rs-inner-blog pt-100 pb-100 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details">
                                <div className="blog-full">
                                    <h2 className="title">Payment Policy</h2>
                                    <div className="blog-content legal-document">
                                        <section className="section">
                                            <h5 className="section-title">1. Payment Methods</h5>
                                            <p>We accept various secure payment methods including major credit cards (Visa, MasterCard, American Express), debit cards, and digital payment solutions. All payments are processed through PCI-DSS compliant payment gateways to ensure the highest level of security for your transactions.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">2. Pricing and Currency</h5>
                                            <p>All prices are displayed in USD (United States Dollars) unless otherwise specified. We reserve the right to adjust prices at any time to reflect changes in market conditions, exchange rates, or operational costs. However, any price changes will not affect orders that have already been confirmed and paid for. All prices are exclusive of applicable taxes, which will be calculated and added during the checkout process.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">3. Payment Security</h5>
                                            <p>We implement industry-leading security measures including SSL encryption, tokenization, and secure payment processing to protect your sensitive payment information. Our systems are regularly audited and comply with international security standards. We never store your complete payment card details on our servers, and all transactions are processed through secure, certified payment gateways.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">4. Refund Policy</h5>
                                            <p>Refunds are processed according to our comprehensive refund policy. For subscription services, refunds may be available within the first 14 days of purchase, subject to usage limits. For one-time purchases, refunds are typically processed within 5-10 business days, depending on your payment method and bank processing times. Please note that certain services may have specific refund conditions outlined in their service agreements.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">5. Subscription Payments</h5>
                                            <p>For subscription-based services, payments will be automatically charged on a recurring basis according to your selected subscription plan. You will receive advance notification before each renewal charge, and you can manage or cancel your subscription at any time through your account dashboard. Subscription fees are billed in advance for the upcoming billing period, and changes to your subscription plan will take effect at the start of the next billing cycle.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">6. Failed Payments</h5>
                                            <p>In case of failed payments, we will notify you immediately via email and provide detailed instructions on how to resolve the issue. We will make multiple attempts to process the payment over a 7-day period. During this time, your services will remain active. If payment cannot be processed after multiple attempts, services may be temporarily suspended until payment is successfully completed. You will be given a grace period to update your payment information before any service interruption occurs.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">7. Payment Disputes</h5>
                                            <p>If you have any concerns about a payment or believe there has been an error in billing, please contact our customer support team immediately. We will investigate the matter thoroughly and work with you to resolve any payment-related issues. For chargebacks, we require notification within 30 days of the disputed transaction. We maintain detailed transaction records and will provide all necessary documentation to resolve disputes fairly and efficiently.</p>
                                        </section>

                                        <section className="section">
                                            <h5 className="section-title">8. Changes to Payment Policy</h5>
                                            <p>We reserve the right to modify this payment policy at any time to reflect changes in our business practices, legal requirements, or industry standards. Any changes will be effective immediately upon posting on our website. We will make reasonable efforts to notify users of significant changes via email or through our website. Your continued use of our services after any changes to this policy constitutes your acceptance of the modified terms.</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer footerClass="rs-footer" />
            <SearchModal />
        </React.Fragment>
    );
}

export default PaymentPolicy;
