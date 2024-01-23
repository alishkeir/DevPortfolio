const BlogsSection = () => {
  return (
    <section className='latest-blog-section p-3 p-lg-5'>
      <div className='container'>
        <h2 className='section-title font-weight-bold mb-5'>
          Latest Blog Posts
        </h2>
        <div className='row'>
          <div className='col-md-4 mb-5'>
            <div className='card blog-post-card'>
              <img
                className='card-img-top'
                src='assets/images/blog/blog-post-thumb-card-1.jpg'
                alt='image'
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  <a className='theme-link' href='blog-post.html'>
                    Top 3 JavaScript Frameworks
                  </a>
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className='mb-0'>
                  <a className='text-link' href='blog-post.html'>
                    Read more &rarr;
                  </a>
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Published 2 days ago</small>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <div className='card blog-post-card'>
              <img
                className='card-img-top'
                src='assets/images/blog/blog-post-thumb-card-2.jpg'
                alt='image'
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  <a className='theme-link' href='blog-post.html'>
                    About Remote Working
                  </a>
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className='mb-0'>
                  <a className='text-link' href='blog-post.html'>
                    Read more &rarr;
                  </a>
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Published a week ago</small>
              </div>
            </div>
          </div>
          <div className='col-md-4 mb-5'>
            <div className='card blog-post-card'>
              <img
                className='card-img-top'
                src='assets/images/blog/blog-post-thumb-card-3.jpg'
                alt='image'
              />
              <div className='card-body'>
                <h5 className='card-title'>
                  <a className='theme-link' href='blog-post.html'>
                    A Guide to Becoming a Full-Stack Developer
                  </a>
                </h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className='mb-0'>
                  <a className='text-link' href='blog-post.html'>
                    Read more &rarr;
                  </a>
                </p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>Published 3 weeks ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center py-3'>
          <a href='blog-home.html' className='btn btn-primary'>
            <i className='fas fa-arrow-alt-circle-right me-2'></i>View Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
