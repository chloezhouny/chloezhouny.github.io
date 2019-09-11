import React, { Component }from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';
import { Tabs } from 'antd';

import venvic from './venvi.png';
import venvi1 from './venvi1.png';
import venvi2 from './venvi2.png';
import venvi3 from './venvi3.png';
import venvi4 from './venvi4.png';

import gymate1 from './gymate1.png';
import gymate2 from './gymate2.png';
import gymate3 from './gymate3.png';

import pinme1 from './pinme1.png';
import pinme2 from './pinme2.png';


import incrowd1 from './incrowd1.png';
import incrowd2 from './incrowd2.png';
import incrowd3 from './incrowd3.png';
import incrowd4 from './incrowd4.png';


import rps1 from './rps1.png';
import rps2 from './rps2.png';
import rps3 from './rps3.png';
import rps4 from './rps4.png';

import clicky1 from './clicky1.png';
import clicky2 from './clicky2.png';
import clicky3 from './clicky3.png';

import cooking1 from './cooking1.png';
import cooking2 from './cooking2.png';
import cooking3 from './cooking3.png';

import liri from './liri.gif';

import dotac from './dota.gif';
import dota1 from './dota1.gif';


import hp from './hp.jpg';
import hp1 from './hp.gif';

import alladinc from './aladdin.jpg';
import alladin1 from './alladin1.gif';



const { TabPane } = Tabs;


class Project extends Component {

 state = {


 }

 
  componentDidMount() {



  }


      render() {

        var venvi = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Venvi",
          cover: venvic,
          description: "a web app where users review specific models of cars, buy and sell cars and test drive in 3D",
          img: [venvi1, venvi2, venvi3, venvi4],
          detail: "VENVI is a web app where users can find and submit user reviews for specific models of cars, buy and sell cars and test drive in 3D. This app takes a different approach from the commonly seen critical reviews from cars, user reviews are also an important factor in influencing purchasing decisions and we provide that.",
          link: "https://phillipchang.github.io/venvi-fe/"
        }

        var gymate = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Gymate",
          cover: "https://images.unsplash.com/photo-1528720208104-3d9bd03cc9d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          description: "A way to plan your workout routines and meet new friends",
          img: [gymate1, gymate2, gymate3, gymate3],
          detail: "A way to plan your workout routines and meet new friends! Record your time working out and weight loss to see progress and look up popular workout routines.",
          link: "https://gymate123.herokuapp.com/"
        }

        var pinme = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "PinME",
          cover: "https://images.unsplash.com/photo-1509622460822-e6f328c33ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80",
          description: "developed for music listeners to enjoy their favorite genre of music or to explore a new genre, either through Spotify or at a music event",
          img: [pinme1, pinme2, pinme1, pinme2],
          detail: "PinME is a website that looks up events based on the type of genre the user picks. Geolocation is used to get the user's location. The inputs are presented as drop-down menus, and the user can choose between many different genres, as well as when the event will be and whether or not the event is paid or free. The website searches within a 100 mile radius of the user if the geolocation request is allowed, and results are limited to 10. The search results will also appear as pins on the Google Map below the results. Four Spotify playlists related to the genre searched will appear above the results.",
          link: "https://phillipchang.github.io/PinMe/"
        }

        var incrowd = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Incrowd",
          cover: "https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          description: "compatibility-based MusicFriendFinder application. ",
          img: [incrowd1, incrowd2, incrowd3, incrowd4],
          detail: "Incrowd is a compatibility-based MusicFriendFinder application. This full-stack site will take in users' ratings for each music genre playlist , then compare their answers with those from other users. The app will then display the name and favourite youtube song video of the user with the best overall music taste match.",
          link: "https://incrowd.herokuapp.com/"
        }

        var rps = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "RPS",
          cover: "https://images.unsplash.com/photo-1558723223-0f8c63ea0fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          description: "A Rock Paper and Scissors online multiplayer game, all with the help of Firebase and three.js",
          img: [rps1, rps2, rps3, rps4],
          detail: "A Rock Paper and Scissors as online multiplayer game, all with the help of Firebase and three.js. Only two users can play at the same time. Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.",
          link: "https://chloezhouny.github.io/RPS-Multiplayer/"
        }

        var clicky = {
          bg: "https://www.moma.org//media/W1siZiIsIjIxNzkxMyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=60eeebf25dddfcb5",
          title: "Vija Celmins Clicky",
          cover: "https://www.moma.org//media/W1siZiIsIjIxNzkxMyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=60eeebf25dddfcb5",
          description: "A memory game of Vija Celmins works built with React.",
          img: [clicky1, clicky2, clicky3, clicky3],
          detail: "A memory game of Vija Celmins works built with React.",
          link: "https://chloezhouny.github.io/clicky/"
        }

        var cooking = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Cooking with Chloe",
          cover: "https://images.unsplash.com/photo-1543435957-1c690ff9f25b?ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80",
          description: "Search and save your favourite recipes and cook with me",
          img: [cooking1, cooking2, cooking3, cooking3],
          detail: "Search and save your favourite recipes and cook with me, built on react",
          link: "https://cooking-with-chloe.herokuapp.com/"
        }

         var fitness = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Fitness",
          cover: venvic,
          description: "a web app where users review specific models of cars, buy and sell cars and test drive in 3D",
          img: [venvi1, venvi2, venvi3, venvi4],
          detail: "VENVI is a web app where users can find and submit user reviews for specific models of cars, buy and sell cars and test drive in 3D. This app takes a different approach from the commonly seen critical reviews from cars, user reviews are also an important factor in influencing purchasing decisions and we provide that.",
          link: "https://phillipchang.github.io/venvi-fe/"
        }

         var harrypotter = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Harry Potter Hangman",
          cover: hp,
          description: "A harry potter hangman game for guessing spells.",
          img: [hp1, hp1, hp1, hp1],
          detail: "This project builds a harry potter hangman game that the comptuper randomly generate a spell from Harry Potter and the player tries to guess it by suggesting letters, within a certain number of guesses. ",
          link: "https://phillipchang.github.io/venvi-fe/"
        }


          var lirinode = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Liri Bot",
          cover: "https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1039&q=80",
          description: "A command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.",
          img: [liri, liri, liri, liri],
          detail: "This project makes LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.",
          link: "https://github.com/chloezhouny/liri-node-app"
        }


        var dota = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Dota Card",
          cover: dotac,
          description: "a RPG Dota card game with Jquery library.",
          img: [dota1, dota1, dota1, dota1],
          detail: "This project builds a RPG card game with Jquery library. The player will choose a hero and fight as that hero for the rest of the game. To win the game the player must defeat all the remaining opponents. Trick is to pick the right enemies, not choosing the strongest player",
          link: "https://chloezhouny.github.io/Dota-Card-Game/"
        }

         var alladin = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "Alladin Trivia",
          cover: alladinc,
          description: "A Trivia game in Alladin theme",
          img: [alladin1, alladin1, alladin1, alladin1],
          detail: "A Trivia game in Alladin theme",
          link: "https://chloezhouny.github.io/TriviaGame/"
        }








        return (
        <div id="projectBody" className = "d-flex justify-content-center"> 
        <div className="container-fluid" id="projectWrapper">
          <div className = "row h-25">
            <div className = "col-12 d-flex justify-content-center">
              <h1>Projects</h1>
            </div>
          </div>  
          <div className = "row h-75" id="projectContent">
            <div className = "col-12 h-100">
              <Tabs className = "h-100">
                <TabPane tab="All" key="1" className = "h-100">
                  
                  <div className = "row h-100">
                    
                    <div className = "col-6 cardbody left">
                      <div className = "row card">
                          <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={venvi} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {venvi.title} </h2>
                            </div>
                            </div>
                          </div>

                      </div>
                      <div className = "row card">
                        <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={pinme} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {pinme.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>
                      <div className = "row card">
                       <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={rps} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {rps.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>   
                  </div>

                  <div className = "col-6 cardbody right">

                      <div className = "row card ">
                       <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={gymate} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {gymate.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>

                      <div className = "row card">
                        <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={incrowd} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {incrowd.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>

                      <div className = "row card">
                        <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={clicky} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {clicky.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div> 

                    </div>
                  </div>              
                </TabPane>
                <TabPane tab="Node.js" key="2">
                 <div className = "row h-100">
                    
                    <div className = "col-6 cardbody left">
                      <div className = "row card">
                         <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={venvi} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {venvi.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={gymate} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {gymate.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>  
                  </div>
                  <div className = "col-6 cardbody left">
                      <div className = "row card">
                         <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={cooking} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {cooking.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>
                      <div className = "row card">
                         <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={lirinode} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {lirinode.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>  
                  </div>
                </div>
                </TabPane>
                <TabPane tab="Fun Games" key="3">
                <div className = "row h-100">
                    
                    <div className = "col-6 cardbody left">
                      <div className = "row card">
                         <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={harrypotter} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {harrypotter.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={dota} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {dota.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>  
                  </div>
                  <div className = "col-6 cardbody left">
                      <div className = "row card">
                         <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={alladin} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {alladin.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>
                      <div className = "row card">
                         <div className = "col-12">
                            <div className = "row">
                              <div className = "offset-2 col-8">
                                  <ProjectCard project={rps} />
                              </div>
                            </div>
                            <div className = "row">
                            <div className = "offset-2 col-8">
                              <h2> {rps.title} </h2>
                            </div>
                            </div>
                          </div>
                      </div>  
                  </div>
                </div>
                </TabPane>
            </Tabs>
           </div>
          </div>
        </div>
        </div>



        );

  }
}



export default Project;
