import ResponsiveImage from '../components/responsiveimages';

const IndexPage = () => {
  return (
    <section id="links">
      <div className="row">
        <div className="col">
          <ResponsiveImage />
        </div>
        <div className="spaceCol" />
        <div className="col">
          <ResponsiveImage />
        </div>
        <div className="spaceCol" />
        <div className="col">
          <ResponsiveImage />
        </div>
      </div>
    </section>
  );
};

export default IndexPage;

