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
                <h3>Team Member Details</h3>
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
                <h3 align="center">Scrum Methodology</h3>
                <p><a id="scrum-link" href="https://www.scrum.org/resources/what-is-scrum">Scrum</a> is designed for teams of ten or fewer members who break their work in to goals that can be completed within time-boxed iterations, calledsprints, no longer than one month and most commonly two weeks. The scrum team assesses progress in time-boxed daily meetings of 15 minutes or fewer, called daily scrums (a form of stand-up meeting). <br/>
    <br/>Work is organised into sprints, where the length is agreed and fixed in advance for each sprint - typically about 2 weeks.
    <br/>At the beginning of a sprint, the scrum team holds a sprint planning event to agree on the sprint goal and plan the backlog. A Sprint review is conducted at the end of a sprint, where the team presents the completed work to the stakeholders, invites feedback and receives suggestions for upcoming work
</p>
            </Container>
        </div>
    );
}

export default AboutUsPage;
