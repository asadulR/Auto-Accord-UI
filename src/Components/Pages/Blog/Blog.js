import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';


import AOS from 'aos';
import 'aos/dist/aos.css';
import PageTitle from '../Shared/PageTitle/PageTitle';
AOS.init();
const Blog = () => {
    return (
        <div className='blogs-container'>
            <PageTitle title="Blog"></PageTitle>
            <div className="container">
                <div>
                    <h2 className='text-center text-primary fw-bolder fs-1 mb-4'>Blog</h2>
                </div>
                <Accordion defaultActiveKey="0" className='accordition-container' data-aos="fade-up"
                        data-aos-duration="2000">
                    <Accordion.Item eventKey="0" className='border-0 shadow mb-4'>
                        <Accordion.Header> <h5 className='text-primary'>Difference between javascript and node js</h5> </Accordion.Header>
                        <Accordion.Body>
                            JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses. <br />
                            JavaScript:
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                            NodeJs :
                            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='border-0 shadow my-4'>
                        <Accordion.Header> <h5 className='text-primary'>When should you use nodejs and when should you use mongodb</h5> </Accordion.Header>
                        <Accordion.Body>
                            Node Js: <br />
                            Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. Node. js is very good at handling simultaneous connections. Since IoT is built on many devices sending small messages that must be handled quickly, Node. js makes a good backend for these kinds of applications, providing serverless architecture and real-time communication support.<br />

                            MngoDB : <br />

                            To prevent the database from becoming a system-wide bottleneck, especially in high volume environments, NoSQL databases perform in a way that relational databases cannot.
                            MongoDB is a great database for web applications, especially if the application services many users who do not interact with each other. Think financial services applications, where users only need access to their own data. Or a blogging application, where users want to log in and create/edit their own blogs. Users not interacting with each other is the key takeaway. With a relational database, one would have to store information about a user across several tables. When that user logs on, the application would have to make several queries, or complex JOIN queries, to access all the information for that user. With MongoDB's schemaless document-database, you can store all of a user's information together. This would allow for a single query to a single collection, and the front-end can deal with displaying/editing the data.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='border-0 shadow my-4'>
                        <Accordion.Header> <h5 className='text-primary'>Differences between SQL and NoSQL databases</h5> </Accordion.Header>
                        <Accordion.Body>
                            When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision. <br />
                            The five critical differences between SQL vs NoSQL are: <br />
                            <br />
                            1. SQL databases are relational, NoSQL databases are non-relational. <br />
                            2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                            3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                            4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                            5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='border-0 shadow mt-4'>
                        <Accordion.Header> <h5 className='text-primary'>What is the purpose of jwt and how does it work</h5> </Accordion.Header>
                        <Accordion.Body>
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                            <br />
                            When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                            By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;