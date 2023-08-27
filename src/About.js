function About() {

    return(
        <div id="About" className="aboutContainer">
            <div className="column1">
                    <div className="secondSubTitle1">
                        <h1>AI</h1>
                    </div>
                    <div className="secondSubTitle">
                        <h1>PROTEIN</h1>
                    </div>
                    <div className="secondSubTitle">
                        <h1>PREDICTION</h1>
                    </div>
            </div>
            <div className="column2">
                <h1 className="aboutTitle">Drug discovery is the <span className="special"> forefront </span>of biomedical research.</h1>
                <p>Central to this process is identifying which enzymes could potentially be used to produce <span className="special"> life saving</span> medicines.</p>
                <p>However, the current status quo is too <span className="special">costly and inefficient</span>. Researchers must tediously sort through endless arrays of protein sequences to identify enzyme patterns, or use complex lab techniques.</p>
                <p>Enter <span className="special">Molecode</span> - an AI software trained to predict protein functions, with an 90% accuracy rate already in recognizing cholesterol degrading enzymes. </p>
                <p>With the ability to <span className="special">predict complex proteins on the click of a button</span>, Molecode could significantly accelerate drug discovery process by allowing researchers to focus on testing out vital medications, instead of manually looking for them.</p>
            </div>

        </div>

    )

}

export default About;