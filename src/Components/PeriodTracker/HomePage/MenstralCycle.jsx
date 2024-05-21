import React from 'react';

const MenstrualCycle = () => {
  return (
    <div id="sec2" className="sec2">
      <div className="box1">
        <br />
        <details>
          <summary style={{ textAlign: 'center', fontSize: 'xx-large' }}>MENSTRUAL CYCLE</summary>
          <p className="textb">is the series of hormonal changes that a woman's body goes through in preparation for pregnancy.
            Each month, one of the ovaries releases an egg. This is called ovulation.  
            If the released egg isn't fertilized during ovulation, the lining of the uterus sheds and the blood and tissue pass out of the body through the vagina. 
            It is measured from the first day of your period to the first day of your next period.
            The average length of a menstrual cycle is 28 to 29 days.
          </p>
        </details>
      </div>
      
      <div className="box2">
        <br />
        <details>
          <summary style={{ textAlign: 'center', fontSize: 'xx-large' }}>MENARCHE</summary>
          <p className="textb"> 
            is the first menstrual period in a female adolescent. It typically occurs
            between the ages of 10 and 16, with the average age of onset being 12.4 years.
            Menarche tends to be painless and occurs without warning. 
            The first cycles are usually of varied lengths and flow. Symptoms include cramps in belly, back, chest, or legs,
            bloating, breakouts, mood swings, and fatigue.
          </p>
        </details>
      </div>

      <div className="box3">
        <br />
        <details>
          <summary style={{ textAlign: 'center', fontSize: 'xx-large' }}>MENOPAUSE</summary>
          <p className="textb"> 
            is the time that marks the end of your menstrual cycles. It's after 12 months without a menstrual period. 
            The transition most often begins between ages 45 and 55. Symptoms usually include irregular menstrual
            periods for the past few months, hot flashes, trouble sleeping, moodiness, and irritability.
            The body can gain fat easily, muscles could feel stiff and achy. The skin and hair could become thinner and dry.
          </p>
        </details>
      </div>
    </div>
  );
};

export default MenstrualCycle;

