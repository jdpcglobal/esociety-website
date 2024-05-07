import React, { useState } from 'react';
import image32 from "../image/col32.png";
import image33 from "../image/col33.png";
import image34 from "../image/col34.png";
import image26 from "../image/col26.png";
import Footer from './footer';
import Toptodown from "./Toptodown";


const BlogDemo = () => {
  // Hardcoded blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'What Is Association Management Software?',
      content:
        'This is the content of the first post. It has more details about something interesting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere purus quis quam aliquam, sit amet mollis ipsum ultricies. Vestibulum auctor, nunc et aliquam fermentum, elit odio venenatis velit, in gravida justo dui sed odio. Duis feugiat nunc vitae turpis varius, at mattis dui ullamcorper. Cras sollicitudin dictum nunc, ac tristique elit dictum ac. Nullam vitae enim pretium, malesuada elit eu, vestibulum urna. Vivamus id erat nec risus eleifend sollicitudin. Nam sit amet congue enim. Nullam tincidunt nisi vitae velit scelerisque, sit amet lobortis quam scelerisque. Nulla facilisi. Vestibulum sodales blandit nulla eget viverra. Cras non nisl luctus, sagittis sapien ac, lacinia leo.',
      image: image32, // Assign your image to the 'image' property
    },
    {
      id: 1,
      title: 'Ananya App – Your Community SuperApp!',
      content:
        'This is the content of the first post. It has more details about something interesting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere purus quis quam aliquam, sit amet mollis ipsum ultricies. Vestibulum auctor, nunc et aliquam fermentum, elit odio venenatis velit, in gravida justo dui sed odio. Duis feugiat nunc vitae turpis varius, at mattis dui ullamcorper. Cras sollicitudin dictum nunc, ac tristique elit dictum ac. Nullam vitae enim pretium, malesuada elit eu, vestibulum urna. Vivamus id erat nec risus eleifend sollicitudin. Nam sit amet congue enim. Nullam tincidunt nisi vitae velit scelerisque, sit amet lobortis quam scelerisque. Nulla facilisi. Vestibulum sodales blandit nulla eget viverra. Cras non nisl luctus, sagittis sapien ac, lacinia leo.',
      image: image33, // Assign your image to the 'image' property
    },
    {
      id: 1,
      title: 'How To Self-Manage Rental Property In The UAE',
      content:
        'This is the content of the first post. It has more details about something interesting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere purus quis quam aliquam, sit amet mollis ipsum ultricies. Vestibulum auctor, nunc et aliquam fermentum, elit odio venenatis velit, in gravida justo dui sed odio. Duis feugiat nunc vitae turpis varius, at mattis dui ullamcorper. Cras sollicitudin dictum nunc, ac tristique elit dictum ac. Nullam vitae enim pretium, malesuada elit eu, vestibulum urna. Vivamus id erat nec risus eleifend sollicitudin. Nam sit amet congue enim. Nullam tincidunt nisi vitae velit scelerisque, sit amet lobortis quam scelerisque. Nulla facilisi. Vestibulum sodales blandit nulla eget viverra. Cras non nisl luctus, sagittis sapien ac, lacinia leo.',
      image: image34, // Assign your image to the 'image' property
    },
    {
      id: 1,
      title: 'Streamline Resident Communication With HOA Software',
      content:
        'This is the content of the first post. It has more details about something interesting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere purus quis quam aliquam, sit amet mollis ipsum ultricies. Vestibulum auctor, nunc et aliquam fermentum, elit odio venenatis velit, in gravida justo dui sed odio. Duis feugiat nunc vitae turpis varius, at mattis dui ullamcorper. Cras sollicitudin dictum nunc, ac tristique elit dictum ac. Nullam vitae enim pretium, malesuada elit eu, vestibulum urna. Vivamus id erat nec risus eleifend sollicitudin. Nam sit amet congue enim. Nullam tincidunt nisi vitae velit scelerisque, sit amet lobortis quam scelerisque. Nulla facilisi. Vestibulum sodales blandit nulla eget viverra. Cras non nisl luctus, sagittis sapien ac, lacinia leo.',
      image: image26, // Assign your image to the 'image' property
    },
    // Add more blog posts here...
  ];

  // State to track which blog post's description is expanded
  const [expandedPostId, setExpandedPostId] = useState(null);

  // Function to handle click event on "Read More" button
  const handleReadMoreClick = (postId) => {
    setExpandedPostId(postId === expandedPostId ? null : postId);
  };

  return (
    <>
<div className="container-fluid101 ">
      <div className="container-fluid101 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand " href="/">
              ADDA ERP
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/customer-Love">
                    Customer Love
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                <form className="d-flex">
            <a className="btn btn-outline-success mx-2  "   href="/login">Sign In</a>
            <a className="btn btn-outline-success me-2 mx-2 "  href="/search-name" >Start Free Trial</a>
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>



    <div className="container45">
      <h2 className="title sidedown">Blog Posts</h2>
      <div className="blog-posts45">
        {blogPosts.map(({ id, title, content, image }) => (
          <div key={id} className="blog-post45">
            <div className="blog-content45">
              <div className="blog-image">
                <img src={image} alt={title} />
              </div>
              <div className="blog-text45">
                <h3 className="post-title45">{title}</h3>
                {/* Render full content if expandedPostId matches, otherwise render excerpt */}
                <p className="post-content45">
                  {expandedPostId === id ? content : content.substring(0, 100) + '...'}
                </p>
                {/* Render "Read More" button */}
                <button className="read-more-btn" onClick={() => handleReadMoreClick(id)}>
                  {expandedPostId === id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  <Footer/>
  <Toptodown/>
    </>
  );
};

export default BlogDemo;
