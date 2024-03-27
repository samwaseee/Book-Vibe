import { GiBookshelf } from "react-icons/gi";


const About = () => {
    return (
        <div className="sans">

            <GiBookshelf style={{fontSize: "7rem",color: "#23BE0A"}}/>
            <h1 className="text-4xl fair">About Us</h1>
            <p className="">
                We are a team of dedicated individuals who are passionate about
                books and reading. Our goal is to provide a platform for book
                enthusiasts to discover and explore new books, and to connect with
                like-minded people.
            </p>
            <h2 className="text-2xl font-bold fair mt-10">Our Team</h2>
            <div className="">
                <div className="border p-4 rounded-lg my-5">
                    <img
                        className=""
                        src="https://i.ibb.co/rcDkWdH/Ellipse-1.png"
                        alt="Team member 1"
                    />
                    <h3 className="text-xl fair">John Doe</h3>
                    <p className="my-2 font-bold">CEO and Founder</p>
                    <p className="">
                        John has been an avid reader for over 20 years, and has a
                        passion for helping people discover new books. He is the
                        driving force behind our platform, and is dedicated to
                        providing the best possible experience for our users.
                    </p>
                </div>
                <div className="border p-4 rounded-lg my-5">
                    <img
                        className=""
                        src="https://i.ibb.co/CbQphrJ/Ellipse-1-1.png"
                        alt="Team member 2"
                    />
                    <h3 className="text-xl fair">Jane Smith</h3>
                    <p className="my-2 font-bold">CTO and Co-Founder</p>
                    <p className="">
                        Jane is a web development expert with a passion for books.
                        She is responsible for the technical aspects of our platform,
                        and works tirelessly to ensure that our site is fast,
                        secure, and user-friendly.
                    </p>
                </div>
                <div className="border p-4 rounded-lg my-5">
                    <img
                        className=""
                        src="https://i.ibb.co/zhzpKQT/Ellipse-1-2.png"
                        alt="Team member 3"
                    />
                    <h3 className="text-xl fair">Alice Johnson</h3>
                    <p className="my-2 font-bold">UX Designer</p>
                    <p className="">
                        Alice is a talented UX designer with a keen eye for detail.
                        She is responsible for the look and feel of our site, and
                        works hard to ensure that our users have a positive and
                        engaging experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;