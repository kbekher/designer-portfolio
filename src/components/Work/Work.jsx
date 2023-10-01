import './Work.scss';

export const Work = () => {
  // const [selecetdItem, setSelectedItem] = useState(null);

  // const handleItemClick = (item) => {
  //   if (selecetdItem === item) {
  //     setSelectedItem(null); // Deselect if already selected
  //   } else {
  //     setSelectedItem(item); // Otherwise, select the child item
  //   }
  // }

  return (
    <div className="Work" id="work">
      <div className="Work__intro">
        <div className="Work__intro-img-wrapper">
          <img
            className="Work__intro-img"
            src="./images/work/intro.webp"
            alt="intro dive in"
          />
        </div>

        <div className="Work__intro-content">
          <h2 className="Work__intro-title">Let's dive into my world!</h2>
        </div>
      </div>

      <div className="Work__projects">
        {/* Simmons-Lasso */}
        <div className="Work__section Work__section--split">
          <div className="Work__project"></div>
          <div className="Work__project">slider</div>
        </div>

        {/* Amster */}
        <div className="Work__section Work__section--full">
        <div className="Work__project"></div>
        </div>

        {/* Poster1 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">slider</div>
          <div className="Work__project">slider</div>
        </div>

        {/* Poster2 */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">slider</div>
          <div className="Work__project">slider</div>
        </div>

        {/* Awa-Fatboy */}
        <div className="Work__section Work__section--split">
          <div className="Work__project">slider</div>
          <div className="Work__project">slider</div>
        </div>

        {/* MDF */}
        <div className="Work__section Work__section--full">
          <div className="Work__project">slider-mobile</div>
          
          <div className="Work__project">slider</div>
          <div className="Work__project">slider</div>
        </div>

        {/* Tropicfeel-Organic */}
        <div className="Work__section Work__section--split">
          <div className="Work__project"></div>
          <div className="Work__project">slider</div>
        </div>

         {/* Faces */}
         <div className="Work__section Work__section--full">
         <div className="Work__project"></div>
        </div>

         {/* Kids */}
         <div className="Work__section Work__section--full">
         <div className="Work__project"></div>
         <div className="Work__project"></div>
        </div>


         {/* Bike */}
         <div className="Work__section Work__section--full">
         <div className="Work__project"></div>
        </div>
      </div>
    </div>
  );
};