import React, { Component } from "react";
import "./style.css";
import ProjectCard from "../ProjectCard";
import { Tabs } from "antd";

import twittuer1 from "./images/twittuer1.gif";

import venvic from "./images/venvi.png";
import venvi1 from "./images/venvi1.gif";
import venvi2 from "./images/venvi2.gif";
import venvi3 from "./images/venvi3.gif";
import venvi4 from "./images/venvi4.gif";

import gymate1 from "./images/gymate1.png";
import gymate2 from "./images/gymate2.gif";
import gymate3 from "./images/gymate3.png";
import gymate4 from "./images/gymate4.gif";

import pinme1 from "./images/pinme1.gif";
import pinme2 from "./images/pinme2.gif";
import pinme3 from "./images/pinme3.gif";
import pinme4 from "./images/pinme4.gif";

import incrowd1 from "./images/incrowd1.gif";
import incrowd2 from "./images/incrowd2.gif";
import incrowd3 from "./images/incrowd3.gif";
import incrowd4 from "./images/incrowd4.gif";

import rps1 from "./images/rps1.gif";
import rps2 from "./images/rps2.gif";
import rps3 from "./images/rps3.gif";
import rps4 from "./images/rps4.gif";

import clicky1 from "./images/clicky1.gif";
import clicky2 from "./images/clicky2.gif";
import clicky3 from "./images/clicky3.gif";
import clicky4 from "./images/clicky4.gif";

import cooking1 from "./images/cooking1.png";
import cooking2 from "./images/cooking1.png";
import cooking3 from "./images/cooking1.png";
import cooking4 from "./images/cooking1.png";

import liri1 from "./images/liri.gif";
import liri2 from "./images/liri.gif";
import liri3 from "./images/liri.gif";
import liri4 from "./images/liri.gif";

import dota1 from "./images/dota1.gif";
import dota2 from "./images/dota2.gif";
import dota3 from "./images/dota3.gif";
import dota4 from "./images/dota4.gif";

import hp from "./images/hp.jpg";
import hp1 from "./images/hp1.gif";
import hp2 from "./images/hp2.gif";
import hp3 from "./images/hp3.gif";
import hp4 from "./images/hp1.gif";

import alladinc from "./images/aladdin.jpg";
import alladin1 from "./images/alladin1.gif";
import alladin2 from "./images/alladin2.gif";
import alladin3 from "./images/alladin3.gif";
import alladin4 from "./images/alladin4.gif";

const { TabPane } = Tabs;

class Project extends Component {
  state = {};

  componentDidMount() {}

  render() {
    var venvi = {
      title: "Venvi",
      cover: venvic,
      description: "Yelp for Cars",
      img: [venvi1, venvi2, venvi3, venvi4],
      tech: ["React", "Three.js", "Passport", "Material UI", "Ant Design"],
      detail:
        "VENVI is a web app where users can find and submit user reviews for specific models of cars, buy and sell cars and test drive in 3D (Click on screen and press g to start driving. Press c to change vehicle color). This app takes a different approach from the commonly seen critical reviews from cars, user reviews are also an important factor in influencing purchasing decisions and we provide that.",
      link: "https://phillipchang.github.io/venvi-fe/",
      code: "https://github.com/chloezhouny/VENVI",
    };

    var twittuer = {
      title: "Twittuer",
      cover:
        "https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      description: "Social Networking Site",
      img: [twittuer1],
      tech: ["React", "JSON-server", "Ant Design Mobile", "react-virtualized"],
      detail:
        "Twittuer is a mobile web app that mocks Twitter. Users can post, comment, like, and share tweets, as well as follow other users. ",
      link: "https://github.com/chloezhouny/twittuer",
      code: "https://github.com/chloezhouny/twittuer",
    };

    var gymate = {
      title: "Gymate",
      cover:
        "https://images.unsplash.com/photo-1531842608054-1947fa9f119a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      description: "Workout Routines Planner",
      img: [gymate1, gymate2, gymate3, gymate4],
      tech: ["MySQL", "Sequalize", "Okta", "AWS-SDK S3"],
      detail:
        "A way to plan your workout routines and meet new friends! Record your time working out and weight loss to see progress and look up popular workout routines.",
      link: "https://gymate123.herokuapp.com/",
      code: "https://github.com/chloezhouny/Gymate",
    };

    var pinme = {
      title: "PinME",
      cover:
        "https://images.unsplash.com/photo-1509622460822-e6f328c33ac4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=636&q=80",
      description: "Music Event Finder",
      img: [pinme1, pinme2, pinme3, pinme4],
      tech: [
        "anime.js",
        "Google Maps API",
        "HTML5 Geolocation",
        "Eventbrite API",
        "Spotify API",
        "Firebase",
      ],
      detail:
        "PinME is a website that looks up events based on the type of genre the user picks. Geolocation is used to get the user's location. The inputs are presented as drop-down menus, and the user can choose between many different genres, as well as when the event will be and whether or not the event is paid or free. The website searches within a 100 mile radius of the user if the geolocation request is allowed, and results are limited to 10. The search results will also appear as pins on the Google Map below the results. Four Spotify playlists related to the genre searched will appear above the results.",
      link: "https://b0bland.github.io/PinMe/",
      code: "https://github.com/chloezhouny/PinMe",
    };

    var incrowd = {
      title: "Incrowd",
      cover:
        "https://images.unsplash.com/flagged/photo-1563248101-a975e9a18cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description: "Music Friend Finder",
      img: [incrowd1, incrowd2, incrowd3, incrowd4],
      tech: ["Bootstrap", "Ulkit", "Express", "Path"],
      detail:
        "Incrowd is a compatibility-based MusicFriendFinder application. This full-stack site will take in users' ratings for each music genre playlist , then compare their answers with those from other users. The app will then display the name and favourite youtube song video of the user with the best overall music taste match.",
      link: "https://incrowd.herokuapp.com/",
      code: "https://github.com/chloezhouny/InCrowd",
    };

    var rps = {
      title: "RPS",
      cover:
        "https://images.unsplash.com/photo-1558723223-0f8c63ea0fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      description: "Online Multiplayer Game",
      img: [rps1, rps2, rps3, rps4],
      tech: ["Three.js", "Firebase"],
      detail:
        "A Rock Paper and Scissors as online multiplayer game, all with the help of Firebase and three.js. Only two users can play at the same time. Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.",
      link: "https://chloezhouny.github.io/RPS-Multiplayer/",
      code: "https://github.com/chloezhouny/RPS-Multiplayer",
    };

    var clicky = {
      title: "Vija Celmins Clicky",
      cover:
        "https://www.moma.org//media/W1siZiIsIjIxNzkxMyJdLFsicCIsImNvbnZlcnQiLCItcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=60eeebf25dddfcb5",
      description: "Memory Game",
      img: [clicky1, clicky2, clicky3, clicky4],
      tech: ["React", "Ulkit"],
      detail: "A memory game of Vija Celmins works built with React.",
      link: "https://chloezhouny.github.io/clicky/",
      code: "https://github.com/chloezhouny/clicky",
    };

    var cooking = {
      title: "Cooking with Chloe",
      cover:
        "https://images.unsplash.com/photo-1543435957-1c690ff9f25b?ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80",
      description: "Recipes Scrapper",
      img: [cooking1, cooking2, cooking3, cooking4],
      tech: ["React", "Ulkit", "MongoDB", "Axios"],
      detail:
        "Search and save your favourite recipes and cook with me, built on react",
      link: "https://cooking-with-chloe.herokuapp.com/",
      code: "https://github.com/chloezhouny/Cooking-With-Chloe",
    };

    var fitness = {
      title: "Fitness",
      cover: venvic,
      description: "Yelp for Cars",
      img: venvi1,
      tech: [
        "React.js",
        "Node.js",
        "Three.js",
        "Passport.js",
        "React Materialize",
        "Material UI",
        "Ant Design",
        "Axios",
      ],
      detail:
        "VENVI is a web app where users can find and submit user reviews for specific models of cars, buy and sell cars and test drive in 3D. This app takes a different approach from the commonly seen critical reviews from cars, user reviews are also an important factor in influencing purchasing decisions and we provide that.",
      link: "https://phillipchang.github.io/venvi-fe/",
    };

    var harrypotter = {
      title: "Harry Potter Hangman",
      cover: hp,
      description: "Hangman Game",
      img: [hp1, hp2, hp3, hp4],
      tech: ["Javascript"],
      detail:
        "This project builds a harry potter hangman game that the comptuper randomly generate a spell from Harry Potter and the player tries to guess it by suggesting letters, within a certain number of guesses. ",
      link: "https://chloezhouny.github.io/Harry-Potter-Hangman/",
      code: "https://github.com/chloezhouny/Harry-Potter-Hangman",
    };

    var lirinode = {
      title: "Liri Bot",
      cover:
        "https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1039&q=80",
      description: "Command Line Node App",
      img: [liri1, liri2, liri3, liri4],
      tech: ["Axios NPM", "Chalk NPM", "Spotify NPM", "Node.js"],
      detail:
        "This project makes LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.",
      link: "https://github.com/chloezhouny/liri-node-app",
      code: "https://github.com/chloezhouny/liri-node-app",
    };

    var dota = {
      title: "Dota",
      cover:
        "https://cdn.player.one/sites/player.one/files/styles/lg/public/2019/05/22/dota-2.png",
      description: "RPG Card Game",
      img: [dota1, dota2, dota3, dota4],
      tech: ["Ulkit", "Bootstrap", "Jquery"],
      detail:
        "This project builds a RPG card game with Jquery library. The player will choose a hero and fight as that hero for the rest of the game. To win the game the player must defeat all the remaining opponents. Trick is to pick the right enemies, not choosing the strongest player",
      link: "https://chloezhouny.github.io/Dota-Card-Game/",
      code: "https://github.com/chloezhouny/Dota-Card-Game",
    };

    var alladin = {
      title: "Alladin Trivia",
      cover: alladinc,
      description: "Trivia Game",
      img: [alladin1, alladin2, alladin3, alladin4],
      tech: ["Ulkit", "Bootstrap", "Jquery"],
      detail: "A Trivia game in Alladin theme",
      link: "https://chloezhouny.github.io/TriviaGame/",
      code: "https://github.com/chloezhouny/TriviaGame",
    };

    return (
      <div id="projectBody" className="d-flex justify-content-center">
        <div className="container-fluid" id="projectWrapper">
          <div className="row h-25">
            <div className="col-12 d-flex justify-content-center">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="row h-75" id="projectContent">
            <div className="col-12 h-100">
              <Tabs className="h-100">
                <TabPane tab="Main" key="1" className="h-100 projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={twittuer} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {twittuer.title} </h2>
                              <p> {twittuer.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={pinme} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {pinme.title} </h2>
                              <p> {pinme.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={incrowd} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {incrowd.title} </h2>
                              <p> {incrowd.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 cardbody right">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={venvi} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {venvi.title} </h2>
                              <p> {venvi.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card ">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={gymate} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {gymate.title} </h2>
                              <p> {gymate.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Fun Games" key="2" className="projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={harrypotter} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {harrypotter.title} </h2>
                              <p> {harrypotter.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={dota} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {dota.title} </h2>
                              <p> {dota.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={clicky} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {clicky.title} </h2>
                              <p> {clicky.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 cardbody right">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={alladin} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {alladin.title} </h2>
                              <p> {alladin.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={rps} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {rps.title} </h2>
                              <p> {rps.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Node.js" key="3" className="projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={lirinode} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {lirinode.title} </h2>
                              <p> {lirinode.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="All    " key="4" className="h-100 projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={twittuer} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {twittuer.title} </h2>
                              <p> {twittuer.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card ">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={gymate} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {gymate.title} </h2>
                              <p> {gymate.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={pinme} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {pinme.title} </h2>
                              <p> {pinme.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={rps} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {rps.title} </h2>
                              <p> {rps.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={harrypotter} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {harrypotter.title} </h2>
                              <p> {harrypotter.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={dota} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {dota.title} </h2>
                              <p> {dota.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 cardbody right">
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={venvi} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {venvi.title} </h2>
                              <p> {venvi.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={incrowd} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {incrowd.title} </h2>
                              <p> {incrowd.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={clicky} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {clicky.title} </h2>
                              <p> {clicky.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={alladin} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {alladin.title} </h2>
                              <p> {alladin.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={cooking} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {cooking.title} </h2>
                              <p> {cooking.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={lirinode} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {lirinode.title} </h2>
                              <p> {lirinode.description}</p>
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
