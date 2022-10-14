import React from 'react';
import {Container, Table } from 'reactstrap';

import u from './assets/U.png'
import pg from './assets/PG.png'
import R12 from './assets/12.png'
import R12A from './assets/12A.png'
import R15 from './assets/15.png'
import R18 from './assets/18.png'


const ClassificationsPage = () => {
    document.title = "Classifications"

    return (
        <div id="dropped-box" className="body" align="center">
        <Container>
            <h1 id="header" className="title">FILM CLASSIFICATIONS</h1>
            <br></br>
            <h3>Information For Our Customers</h3>
            <br></br>
            <p>
            Films shown in UK cinemas, or sold as Videos or DVDs must be given a rating by the British Board of Film Classification (BBFC) who assign each film a rating to help viewers decide whether a film is suitable for them or their children. 
            <br></br>
            <br></br>
            There are a number of criteria involved in deciding the classification for a film such as: Theme, Language, Nudity, Sex, Violence, Imitable techniques, Horror and Drugs. For a detailed explanation of these criteria and the rating system please check the BBFC's web site. We have included a brief summary of the ratings below.
            <br></br>
            <br></br>
            There are occasionally extra cautionary notes added to a film to help parents or guardians decide on the suitability of a film.
            </p>
            <br></br>

            <h3>Rating Guidelines</h3>
            <br></br>
            <div id="dropped-box" className="body">
                <Table id="open-table" borderless striped >
                    <tbody align="center">
                        <tr >
                            <th scope="row">1</th>
                            <td><img src={u} alt = "universal" width="75%" height = "75%"></img></td>
                            <td>Universal</td>
                            <td>Suitable For All</td>
                            <td>These movies should be positive in tone and should make clear differences between right and wrong. There should be no dangerous behaviour that children can copy and, at most, there may be occasional very mild bad language. </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                             <td><img src={pg} alt = "pg" width="75%" height = "75%"></img></td>
                            <td>Parental Guidance</td>
                            <td>General Viewing, But Some Scenes May Be Unsuitable for Young Children</td>
                            <td>PG films might include some heavier topics, such as racism or bullying, but not in a way that condones such behaviour. Any bad language is mild, and there may be mild innuendo and references to sex. </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                             <td><img src={R12}alt = "12" width="75%" height = "75%"></img></td>
                            <td>12</td>
                            <td>Ages 12 or Over</td>
                            <td>Weapons and bad behaviour may be included in these movies but should not be shown as attractive and should not be glamorised. Moderate bad language, and sometimes strong language depending on the context, may be used. Sex scenes should be short and discreet. </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                             <td><img src={R12A} alt = "12A" width="75%" height = "75%"></img></td>
                            <td>12A</td>
                            <td>Ages 12 or Over. Under 12's may watch if an adult is present.</td>
                            <td>The 12A rating only applies to films shown in cinemas. This means a child under the age of 12 must be accompanied by a grown-up.</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                             <td><img src={R15} alt = "15" width="75%" height = "75%"></img></td>
                            <td>15</td>
                            <td>Ages 15 or Over</td>
                            <td>Behaviour such as suicide and self harm may be inlcuded but not in great detail. Use of illegal drugs may be shown but should not be promoted, and strong language is permissable. Sex scenes may be included but not excessively or explicitly. Strong violence is allowed but it cannot dwell on 'inflicting pain or injury'.</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td><img src={R18} alt = "18" width="75%" height = "75%"></img></td>
                            <td>18</td>
                            <td>Ages 18 or Over</td>
                            <td>The film may include very strong language, explicit sex scenes and strong violence. The BBFC only request limitations on the content if is a risk to adults or society or the content is illegal in any way.  </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <br />
        </Container>
        <p>For more information on this, please visit the following websites:
            <ul>
            <li><a href="http://www.screenonline.org.uk/film/id/592611/index.html">BBFC Classifications</a></li>
            <li><a href="https://www.theschoolrun.com/parents-guide-movie-age-ratings">The School Run</a></li>
            </ul>
        </p>
    </div>
    );
};

export default ClassificationsPage;
