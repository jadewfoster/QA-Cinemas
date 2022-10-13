import React from 'react';
import {Container, Table} from 'reactstrap';

const AboutUsPage = () => {
    document.title = "About Us"

    return (
        <div id="dropped-box" className="body" align="center">
            <Container>
                <h1 id="header" className="title">ABOUT US</h1>
                <br/>
                <h3>Our Team</h3>
                <br/>
                <p>
                    Our group, consisting of 4 people, were tasked with creating a fully functional website, including a booking and payment system, for the fictional company QA Cinemas.
                    <br />
                    Over our 10 weeks of training with QA we have learnt many skills. In this project, we specifically used our skills in React, MongoDB, Javascript, Node, Express, Mocha and Chai.
                </p>
                <br/>
                <h4>Team Member Details</h4>
                <div id="dropped-box" className="body">
                    <Table id="open-table" borderless striped >
                        <thead align="center">
                            <tr >
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Github</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            <tr >
                                <td>Jade</td>
                                <td>Foster</td>
                                <td>jadewfoster@gmail.com</td>
                                <td><a id="link-to-github" href="https://www.github.com/jadewfoster" target="_blank" rel="noreferrer">jadewfoster</a></td>
                                <td>Front End</td>
                            </tr>
                            <tr>
                                <td>Mariana</td>
                                <td>Nikolova</td>
                                <td>mnikolova1000@gmail.com]</td>
                                <td><a id="link-to-github" href="https://github.com/mariana-ks01" target="_blank" rel="noreferrer">mariana-ks01</a></td>
                                <td>Back End</td>
                            </tr>
                            <tr>
                                <td>Isabella</td>
                                <td>O'Hara</td>
                                <td>isabellaohara@btinternet.com</td>
                                <td><a id="link-to-github" href="https://www.github.com/isabellaohara" target="_blank" rel="noreferrer">isabellaohara</a></td>
                                <td>Back End</td>
                            </tr>
                            <tr>
                                <td>Fatima</td>
                                <td>Sheik-Nur</td>
                                <td>fsheikhnur@gmail.com</td>
                                <td><a id="link-to-github" href="https://www.github.com/fjeylani" target="_blank" rel="noreferrer">fjeylani</a></td>
                                <td>Front End</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <br />
            </Container>
        </div>
    );
}

export default AboutUsPage;
