/* eslint-disable react/prop-types */
import { Card, Col } from "react-bootstrap";
import "../Varient.css";
import { Link } from "react-router-dom";

const SubcardV2_1 = ({ item }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <Col md={6} className="mb-3">
        <Card className="border-0">
          <Link className="link-style" to={`/post/${item.title_slug}`}>
            <div className="image-container">
              <Card.Img
                variant="top"
                src={`${import.meta.env.VITE_BACKEND_URL}${item.image_mid}`}
                className="varient-image"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  borderRadius: 0,
                }}
              />
            </div>
            <Card.Body>
              <h6 className="mt-3 card-heading">
                {item.title.length > 80
                  ? `${item.title.slice(0, 90)}...`
                  : item.title}
              </h6>
              <p className="card-text small">{formatDate(item.created_at)}</p>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </>
  );
};

export default SubcardV2_1;