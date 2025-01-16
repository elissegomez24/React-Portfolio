export default function Portfolio() {
    return (
        // <!-- Portfolio Section Design -->
        <section className="portfolio" id="portfolio">
            <h2 className="heading">My <span>Portfolio</span></h2>

            <div className="portfolio-container">
                {/* <!-- Project 1 --> */}
                <div className="portfolio-box">
                    <img src="/Employee Payroll Tracker.png" alt="Employee Payroll Tracker" />
                    <div className="portfolio-layer">
                        <div className="portfolio-title">
                            <h4>Employee Payroll Tracker</h4>
                            <p className="portfolio-description">
                            The application allows users to view, add, and update information about departments, roles, and employees, to organize and plan business operations.
                            </p>
                            <div className="portfolio-links">
                                <a href="https://elissegomez24.github.io/JavaScript-Challenge/" aria-label="View Employee Payroll Tracker live site">
                                    <i className="bx bx-link-external"></i>
                                </a>
                                <a href="https://github.com/elissegomez24/JavaScript-Challenge" aria-label="View Employee Payroll Tracker GitHub repository">
                                    <i className="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 2 --> */}
                <div className="portfolio-box">
                    <img src="/Blog Page.png" alt="My Personal Blog" />
                    <div className="portfolio-layer">
                        <div className="portfolio-title">
                            <h4>My Personal Blog</h4>
                            <p className="portfolio-description">
                                This is a personal blog application that allows users to submit blog posts with a username, title, and content.
                            </p>
                            <div className="portfolio-links">
                                <a href="https://elissegomez24.github.io/Elisse-Blog/" aria-label="View My Personal Blog live site">
                                    <i className="bx bx-link-external"></i>
                                </a>
                                <a href="https://github.com/elissegomez24/Elisse-Blog" aria-label="View My Personal Blog GitHub repository">
                                    <i className="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 3 --> */}
                <div className="portfolio-box">
                    <img src="/Task Board Image.png" alt="Task Board" />
                    <div className="portfolio-layer">
                        <div className="portfolio-title">
                            <h4>Task Board</h4>
                            <p className="portfolio-description">
                                This project implements a Kanban board for managing tasks. It allows users to add new tasks with titles, descriptions, and deadlines. 
                            </p>
                            <div className="portfolio-links">
                                <a href="https://elissegomez24.github.io/Task-Board/" aria-label="View Task Board live site">
                                    <i className="bx bx-link-external"></i>
                                </a>
                                <a href="https://github.com/elissegomez24/Task-Board" aria-label="View Task Board GitHub repository">
                                    <i className="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 4 --> */}
                <div className="portfolio-box">
                    <img src="/Weather Dashboard.png" alt="Weather Dashboard" />
                    <div className="portfolio-layer">
                        <div className="portfolio-title">
                            <h4>Weather Dashboard</h4>
                            <p className="portfolio-description">
                                A web application that allows users to search for weather information of cities and view current conditions as well as a 5-day forecast.
                            </p>
                            <div className="portfolio-links">
                                <a href="https://elissegomez24.github.io/Weather-Dashboard/" aria-label="View Weather Dashboard live site">
                                    <i className="bx bx-link-external"></i>
                                </a>
                                <a href="https://github.com/elissegomez24/Weather-Dashboard" aria-label="View Weather Dashboard GitHub repository">
                                    <i className="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 5 --> */}
                <div className="portfolio-box">
                    <img src="/Book Search Engine.png" alt="Book Search Engine" />
                    <div className="portfolio-layer">
                        <div className="portfolio-title">
                            <h4>Book Search Engine</h4>
                            <p className="portfolio-description">
                                The Book Search Engine is a web application that allows users to search for books using the Google Books API.
                            </p>
                            <div className="portfolio-links">
                                <a href="https://book-search-engine-3qy8.onrender.com/" aria-label="View Book Search Engine live site">
                                    <i className="bx bx-link-external"></i>
                                </a>
                                <a href="https://github.com/elissegomez24/Book-Search-Engine" aria-label="View Book Search Engine GitHub repository">
                                    <i className="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 6 --> */}
                <div className="portfolio-box">
                    <img src="/Redux Store.png" alt="Redux Store" />
                    <div className="portfolio-layer">
                        <div className="portfolio-title">
                            <h4>Redux Store</h4>
                            <p className="portfolio-description">
                                The application allows users to browse products, add items to a shopping cart, view details about products, and checkout.
                            </p>
                            <div className="portfolio-links">
                                <a href="https://redux-store-g8ui.onrender.com/" aria-label="View Redux Store live site">
                                    <i className="bx bx-link-external"></i>
                                </a>
                                <a href="https://github.com/elissegomez24/Redux-Store" aria-label="View Redux Store GitHub repository">
                                    <i className="bx bxl-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
