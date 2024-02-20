import { useEffect, useState } from "react"
import Random from "./RandomButton";
import axios from "axios"

export default function Card({ API }) {

    const [API_URL, setAPI_URL] = useState(API)

    const [userData, setUserData] = useState();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await axios.get(API_URL)
                if (data.status === 200) {
                    // console.log(data.data.results[0])
                    setUserData(data.data.results[0]);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getUserData();
    }, [API_URL])

    const handleRandomClick = () => {
        setAPI_URL(prev => "https://randomuser.me/api/?page=1&results=1&dummy=" + Math.random())
    }

    // console.log(API_URL)

    if (userData) {
        return (
            <>
                {/* <div className="container flex w-[500px] h-[350px] border-2 rounded-lg">
                    <div className="img-container h-[350px] w-[250px]">
                        <img src={userData.picture.large} className="w-[128px] h-[128px] border-2 m-auto" />
                    </div>
                    <div className="details-container h-[350px] w-[250px]">
                        <h3 className="m-auto">{userData.name.first + " " + userData.name.last}</h3>
                    </div>
                </div> */}
                <div className="container flex justify-center items-center w-[500px] h-[350px] border-2 border-slate-400 rounded-lg bg-gradient-to-r from-gray-800 via-gray-700 to-slate-800 shadow-md shadow-slate-400 hover:scale-[1.0075]">
                    <div className="img-container flex justify-center items-center h-[350px] w-[250px]">
                        <img src={userData.picture.large} className="w-[128px] h-[128px] border-2 border-slate-400 shadow-slate-500 shadow-md rounded-md" />
                    </div>
                    <div className="details-container flex flex-col justify-center items-start h-[350px] w-[250px]">
                        <h2 className="text-xl mb-[1.1rem]">{userData.name.first + " " + userData.name.last}</h2>
                        <p className="mb-[1.2rem]">{userData.gender}</p>
                        <p>{userData.phone}</p>
                    </div>
                </div>
                <Random onClickFunction={handleRandomClick} />
            </>
        )
    }
    else {
        return (
            <p>loading...</p>
        )
    }
}