import Html from "../../assets/icon/html.svg"
import Css from "../../assets/icon/css3.svg"
import Sass from "../../assets/icon/sass.svg"
import Bootstrap from "../../assets/icon/bootstrap.svg"
import Tailwind from "../../assets/icon/tailwind.svg"
import Js from "../../assets/icon/js.svg"
import React from "../../assets/icon/react.svg"
import Angular from "../../assets/icon/angular.svg"
import Git from "../../assets/icon/git.svg"
import Github from "../../assets/icon/github.svg"
import Npm from "../../assets/icon/npm.svg"
import Trello from "../../assets/icon/trello.svg"
import Vsc from "../../assets/icon/vsc.svg"
import Figma from "../../assets/icon/figma.svg"
import Vite from "../../assets/icon/vite.svg"
import Type from "../../assets/icon/typescript.svg"
/* eslint-disable react/prop-types */

const Skills = ({ scrolear }) => {
    return (
        <div>
            <div id="skills" className={` ${scrolear ? 'bg-sky-950' : ' bg-teal-600 '} w-full flex flex-col md:flex-row lg:flex-row px-10 lg:px-16 gap-24 lg:pt-20 lg:pb-40 pb-20 items-center transition-all duration-500`}
            >
                <h5 className=' text-red-300 font-oswald font-bold tracking-tighter text-4xl md:text-[80px] lg:text-[100px] uppercase leading-none text-center pt-8'> Skills</h5>
                <div className=" w-full flex flex-col p-10 text-orange-100 text-xl text-center">
                    <div className="flex flex-row flex-wrap pb-7 gap-5">
                        <div>
                            <img className="size-20 mb-2 " src={Html} alt="" />
                            <p>HTML 5</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Css} alt="" />
                            <p>CSS 3</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Js} alt="" />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Type} alt="" />
                            <p>TypeScript</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap pb-7 gap-5">
                        <div>
                            <img className="size-20 mb-2" src={Sass} alt="" />
                            <p>Sass</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Bootstrap} alt="" />
                            <p>Bootstrap</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={React} alt="" />
                            <p>React</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Angular} alt="" />
                            <p>Angular</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Tailwind} alt="" />
                            <p>Tailwind</p>
                        </div>

                    </div>
                    <div className="flex flex-row flex-wrap pb-7 gap-5">
                        <div>
                            <img className="size-20 mb-2" src={Git} alt="" />
                            <p>Git</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Github} alt="" />
                            <p>Github</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Npm} alt="" />
                            <p>NPM</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Trello} alt="" />
                            <p>Trello</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Vsc} alt="" />
                            <p>VSC</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Figma} alt="" />
                            <p>Figma</p>
                        </div>
                        <div>
                            <img className="size-20 mb-2" src={Vite} alt="" />
                            <p>Vite</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
