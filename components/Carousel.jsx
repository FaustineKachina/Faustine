import Carousel from "react-bootstrap/Carousel"

export default ({ slides, area }) => {
  const gridarea = `${area}` == "undefined" ? "carousel" : `${area}`
  console.log(gridarea)

  return (
    <div style={{ gridArea: gridarea }} className="neoCarousel">
      <Carousel
        fade
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map(({ source, judul, isi }) => (
          <Carousel.Item
            key={`${judul}`}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <img src={`/img/${source}`} className="carousel-img" />
            <Carousel.Caption>
              <h1 className="carousel-title">{judul}</h1>
              <p>{isi}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
