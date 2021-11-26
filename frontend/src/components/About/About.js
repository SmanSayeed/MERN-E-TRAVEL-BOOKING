import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTopBanner from '../PageTopBanner/PageTopBanner';
import './About.css'

const About = () => {

    const topBanner = './images/top-banner.jpg';
    const bgImg = {
        backgroundImage:`url('{topBanner}') `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <>
            <PageTopBanner title="About Us"></PageTopBanner>
            <Container className="vh-100">
                <Row>
                    <Col md="" className="m-5">
                        <h1 className="text-left mt-3">
                            About Travel Zone
                        </h1>
                        <p className="about-content">
                       Travelogues and blogs
People writing travel blogs about their own experiences, sometimes including advice for travelling in particular areas, or in general.
Review websites
Some examples of websites that use a combination of travel reviews and the booking of travel are TripAdvisor, Priceline.com, Liberty Holidays, and Expedia.
Service providers
Individual airlines, hotels, bed and breakfasts, cruise lines, automobile rental companies, and other travel-related service providers often maintain their own web sites providing retail sales. Many with complex offerings include some sort of search engine technology to look for bookings within a certain timeframe, service class, geographic location, or price range.
Online travel agencies
Travel agency websites selling travel and tourism services.
Fare aggregators and metasearch engines
Metasearch engines conduct searches across multiple independent search engines. Metasearch engines often make use of "screen scraping" to get live availability of flights. Screen scraping is a way of crawling through the airline websites, getting content from those sites by extracting data from the same HTML feed used by consumers for browsing (rather than using a Semantic Web or database feed designed to be machine-readable). Metasearch engines usually process incoming data to eliminate duplicate entries, but may not expose "advanced search" options in the underlying databases (because not all databases support the same options). Aggregators usually take a cut of each sale made through their websites.[2][3]
Blogs and news sites on current travel discounts
Travel bargain websites collect and publish bargain rates by advising consumers where to find them online (sometimes but not always through a direct link). Rather than providing detailed search tools, these sites generally focus on offering advertised specials, such as last-minute sales from travel suppliers eager to deplete unused inventory; therefore, these sites often work best for consumers who are flexible about destinations and other key itinerary components.
Travel and tourism guides
Many websites take the form of a digital version of a traditional guide book, aiming to provide advice on which destinations, attractions, accommodations, and so on, are worth a visit and providing information on how to access them. Most states, provinces and countries have their own convention and visitor bureaus, which usually sponsor a website dedicated to promoting tourism in their respective regions. Cities that rely on tourism also operate websites promoting their destinations, such as VEGAS.com for Las Vegas.
Social travel website
A social travel website is a type of travel website that will look at where the user is going and pair them with other places they want to go based on where other people have gone.[4]
Homestays
                        </p>
                    </Col>
                </Row>
            </Container>

     
        </>
    );
};

export default About;