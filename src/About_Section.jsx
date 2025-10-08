import "./assets/CSS/About_sec.css";
function About_Section({
  heading = "",
  discription_para,
  image_src,
  image_alt,
  imgClass = "",
}) {
  return (
    <section className="about-section">
      <div className="about-text_area">
        <h2 className="about_heading">{heading}</h2>
        <img
          className={`about_Img ${imgClass}`}
          src={image_src}
          alt={image_alt}
        />
        <p className="about-sec_para"> {discription_para}</p>
      </div>
    </section>
  );
}
export default About_Section;
