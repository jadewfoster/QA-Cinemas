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
                                <td><a id="link-to-github" href="https://www.github.com/jadewfoster" target="_blank" rel="noopener noreferrer">jadewfoster</a></td>
                                <td>Front End</td>
                            </tr>
                            <tr>
                                <td>Mariana</td>
                                <td>Nikolova</td>
                                <td>mnikolova1000@gmail.com]</td>
                                <td><a id="link-to-github" href="https://github.com/mariana-ks01" target="_blank" rel="noopener noreferrer">mariana-ks01</a></td>
                                <td>Back End</td>
                            </tr>
                            <tr>
                                <td>Isabella</td>
                                <td>O'Hara</td>
                                <td>isabellaohara@btinternet.com</td>
                                <td><a id="link-to-github" href="https://www.github.com/isabellaohara" target="_blank" rel="noopener noreferrer">isabellaohara</a></td>
                                <td>Back End</td>
                            </tr>
                            <tr>
                                <td>Fatima</td>
                                <td>Sheik-Nur</td>
                                <td>fsheikhnur@gmail.com</td>
                                <td><a id="link-to-github" href="https://www.github.com/fjeylani" target="_blank" rel="noopener noreferrer">fjeylani</a></td>
                                <td>Front End</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <br />
                <h3 align="center">Scrum Methodology</h3>
                <p><a id="scrum-link" href="https://www.scrum.org/resources/what-is-scrum">Scrum</a> is a framework part of the Agile methodology. It is used to facilitate project management and organisation.
                <br/>Scrum is designed for teams of 10 or fewer members. These members have their work broken down into separate goals that are to be completed with in certain time-blocks. These time blocks are known as sprints. A sprint typically lasts about 2 weeks and are rarely longer than a month.  <br/>
                <br/>Before each sprint the scrum team will hold a sprint planning event where they agree the sprint goal and plan the backlog (the list of tasks that need to be done)
                <br/>The team will meet every morning in a meeting called the “stand up meeting” or “daily scrum”  which lasts approximately 10-15 minutes. In this they discuss what they achieved yesterday as well as what their plan is for that day and any problems they may have had.
                </p>
                <br/>
                <h4>Scrum Roles</h4>
                <p>Product Owner: organises the tasks into the product backlog.
                <br/>Developers: the ones who build/develop the product.
                <br/>Scrum master: keeps the scrum team organised, leads the daily scrum.
                </p>
                <br/>
                <h4>How We Used Scrum in Building QA Cinema's Website</h4>
                <p>We began by assigning the scrum roles within the team: 
                <br/>Scrum master and developer: Isabella O’Hara
                <br/>Product Owner and developer: Mariana Nikolova
                <br/>Developer: Fatima Sheikhnur
                <br/>Developer: Jade Foster
                </p>
                <p>We then held our sprint planning meeting to develop the product backlog and organise the task for our first sprint and decided what should be in the second sprint.
                <br/>We chose to have 2 sprints each lasting 1 week. The first sprint was for front and back-end development as well as back-end testing and the second was solely for working on and testing the front end.
                </p>
                <p>
                We began each day with a daily scrum/stand up meeting where we discussed what each of us had achieved the previous day as well as our plans for the coming day.
                <br/>At the end of each sprint we held a sprint review meeting where we discussed what we achieved in that sprint in relation to the product back log and our sprint goal and if anything needed to be carried over into the next sprint.
                </p>
                <p>Overall we found using Scrum to be very beneficial for us when developing this site as it allowed us to easily assign and delegate tasks allowing us to stay on schedule and complete the project on time. Having the daily scrum meetings enabled us to be aware of what each of us were doing meaning there were never any miscommunication issues over individual tasks. Having the product backlog outlined from the start meant we knew how to reach the MVP for this website and so could prioritise our tasks to reach this.</p>
               
            </Container>
        </div>
    );
}

export default AboutUsPage;
