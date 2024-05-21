import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="fourth">
            <div>
                <h1 style={{ fontFamily: 'Poppins', color: 'brown', textAlign: 'center' }}>Contact Us</h1>
            </div>

            <div className="background">
                <div className="container1">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>Let's Get Into</span>
                                    <span>Touch</span>
                                </div>
                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="NAME" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="CONTACT NO" />
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button className="app-form-button">CANCEL</button>
                                        <button className="app-form-button">SEND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer" style={{ backgroundColor: '#dfc398', color: 'brown' }}>
                <div className="FourthSecBottomLeft" >
                    <h4>© 2024 All Rights Reserved</h4>
                </div>

                <div className="FourthSecBottomRight">
                    <img src="images/twitter.png" alt="" />
                    <img src="images/linked-in-logo-of-two-letters.png" alt="" />
                    <img src="images/facebook.png" alt="" />
                    <img src="images/instagram.png" alt="" />
                </div>
            </footer>
        </section>
    );
}

export default Contact;
