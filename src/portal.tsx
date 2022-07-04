import React, { useEffect, useState } from "react";

export const Portal = () => {
    const [userName, setUserName] = useState("")
    const [isShowInput, setShowInput] = useState(false)
    useEffect(() => {
        setUserName(localStorage.getItem('user') ?? "")
    }, [])

    const saveAction = () => {
        localStorage.removeItem('user')
        localStorage.setItem('user', userName)
        setShowInput(false)
    }
    return (
        <div className="w-scree h-screen bg-sky-300 py-12" >
            <div className="w-full flex justify-center">
                <button className={`${isShowInput ? "hidden" : ""} text-xl font-serif text-center py-8 text-pink-400`} onClick={() => setShowInput(true)}>{userName === "" ? "who are you? click here to input" : userName}</button>
                <div className={`${isShowInput ? "" : "hidden"} text-xl font-serif text-center py-8 text-pink-400 flex relative`}>
                    <input autoFocus type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="please input your name" className="h-10 w-64 px-2 outline-0 rounded-md"></input>
                    <button className="w-16 h-10 bg-zinc-400 shadow-md rounded-md mx-2" onClick={saveAction}>Save</button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2" onClick={()=>setShowInput(false)}>

                <a href="/focus" className="w-48 h-32 rounded-md bg-orange-500 flex-col text-center flex items-center justify-center">
                    Focus
                    <svg className="h-12 w-12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22937" width="200" height="200"><path d="M170.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" opacity=".3" p-id="22938"></path><path d="M170.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22939"></path><path d="M426.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22940"></path><path d="M426.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22941"></path><path d="M682.666667 170.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22942"></path><path d="M682.666667 426.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22943"></path><path d="M170.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22944"></path><path d="M426.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22945"></path><path d="M682.666667 682.666667m85.333333 0l0 0q85.333333 0 85.333333 85.333333l0 0q0 85.333333-85.333333 85.333333l0 0q-85.333333 0-85.333333-85.333333l0 0q0-85.333333 85.333333-85.333333Z" fill="#1296db" p-id="22946"></path></svg>
                </a>

                <a href="/calculator" className="w-48 h-32 drop-shadow-lg rounded-md flex-col bg-lime-300 text-center flex items-center justify-center">
                    Calculator
                    <div className="flex justify-center">

                        <svg className="h-12 w-12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23978" width="200" height="200">
                            <path d="M972.8 998.4H51.2a25.6 25.6 0 0 1-25.6-25.6V51.2A25.6 25.6 0 0 1 51.2 25.6h921.6a25.6 25.6 0 0 1 25.6 25.6v921.6a25.6 25.6 0 0 1-25.6 25.6z m-896-51.2h870.4V76.8H76.8v870.4z" p-id="23979" fill="#22bf89"></path><path d="M420.608 331.072H192a25.6 25.6 0 1 1 0-51.2h228.608a25.6 25.6 0 1 1 0 51.2z" p-id="23980" fill="#22bf89"></path><path d="M306.304 445.376a25.6 25.6 0 0 1-25.6-25.6V191.232a25.6 25.6 0 1 1 51.2 0v228.544a25.6 25.6 0 0 1-25.6 25.6zM832 331.072H603.392a25.6 25.6 0 1 1 0-51.2H832a25.6 25.6 0 1 1 0 51.2zM225.472 823.296a25.6 25.6 0 0 1-18.112-43.712l161.6-161.6a25.6 25.6 0 0 1 36.224 36.224l-161.6 161.6a25.6 25.6 0 0 1-18.112 7.488z" p-id="23981" fill="#22bf89"></path><path d="M387.072 823.296a25.6 25.6 0 0 1-18.112-7.488L207.36 654.208a25.6 25.6 0 0 1 36.224-36.224l161.6 161.6a25.6 25.6 0 0 1-18.112 43.712zM832 742.528H603.392a25.6 25.6 0 1 1 0-51.2H832a25.6 25.6 0 1 1 0 51.2zM721.152 661.76a39.232 39.232 0 0 1-27.136-11.008 38.976 38.976 0 0 1-0.256-54.528 40.192 40.192 0 0 1 54.528 0 38.784 38.784 0 0 1 11.264 27.136c0 10.24-4.096 20.224-11.264 27.136a39.04 39.04 0 0 1-27.136 11.264zM721.152 856.064a38.4 38.4 0 0 1-27.136-65.536 39.872 39.872 0 0 1 54.272 0 38.4 38.4 0 0 1-27.136 65.536z" p-id="23982" fill="#22bf89"></path></svg>
                    </div>
                </a>

                <a href="/pinyin" className="w-48 h-32 flex-col drop-shadow-lg rounded-md bg-gray-300 text-center flex items-center justify-center">
                    拼音
                    <div className="flex justify-center">

                        <svg className="w-12 h-12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24694" width="200" height="200"><path d="M881.4 46.8H141.6C96.7 46.8 60 83.5 60 128.4v739.8c0 44.9 36.7 81.6 81.6 81.6h739.8c44.9 0 81.6-36.7 81.6-81.6V128.4c0-44.9-36.8-81.6-81.6-81.6z" fill="#E75960" p-id="24695"></path><path d="M511.5 865.9c-49.6 0-97.8-9.7-143.1-28.9-43.8-18.5-83.1-45-116.8-78.8-33.8-33.8-60.3-73.1-78.8-116.8-19.2-45.3-28.9-93.5-28.9-143.1s9.7-97.8 28.9-143.1c18.5-43.8 45-83.1 78.8-116.8 33.8-33.8 73.1-60.3 116.8-78.8 45.3-19.2 93.5-28.9 143.1-28.9s97.8 9.7 143.1 28.9c43.8 18.5 83.1 45 116.8 78.8 33.8 33.8 60.3 73.1 78.8 116.8 19.2 45.3 28.9 93.5 28.9 143.1s-9.7 97.8-28.9 143.1c-18.5 43.8-45 83.1-78.8 116.8-33.8 33.8-73.1 60.3-116.8 78.8-45.4 19.2-93.5 28.9-143.1 28.9z m0-715.2c-191.7 0-347.6 155.9-347.6 347.6s155.9 347.6 347.6 347.6S859.1 690 859.1 498.3s-156-347.6-347.6-347.6z" fill="#FFFFFF" p-id="24696"></path><path d="M444.9 397.8c3.4-0.7 8.6 0.7 15.5 4.1 6.9 3.5 6.2 8.3-2.1 14.5-8.3 6.2-23.4 12.8-45.5 19.6v55.8c27.5-17.9 40.6-24.1 39.3-18.6-1.4 5.5-14.5 17.9-39.3 37.2v105.4c0 27.6-2.8 48.9-8.3 64.1-5.5 15.1-12.8 15.8-21.7 2.1-9-13.8-20.3-25.8-34.1-36.2-13.8-10.3-13.8-13.8 0-10.3s23.4 4.5 28.9 3.1 9.3-12.7 11.4-34.1c2.1-21.3 3.1-46.5 3.1-75.4-51 35.8-79.9 58.2-86.8 67.2-6.9 9-16.5 5.5-28.9-10.3-12.4-15.8-12.8-23.1-1-21.7 11.7 1.4 27.2-3.4 46.5-14.5 19.3-11 42.7-26.2 70.3-45.5v-62c-16.5 4.1-31.7 6.9-45.5 8.3-13.8 1.4-25.5-0.3-35.1-5.2-9.7-4.8-7.6-8.3 6.2-10.3 13.8-2.1 38.6-10 74.4-23.8 0-23.4-0.7-47.5-2.1-72.3-1.4-24.8-6.2-43.4-14.5-55.8-8.3-12.4-0.4-14.5 23.8-6.2 24.1 8.3 32.4 18.3 24.8 30-7.6 11.7-11.4 44.4-11.4 98.2 17.9-4.3 28.6-6.7 32.1-7.4z m75.4 232.5c-16.5 22.1-36.9 37.6-61 46.5-24.1 8.9-25.8 6.2-5.2-8.3 20.7-14.5 36.8-33.4 48.6-56.8 11.7-23.4 18.9-48.9 21.7-76.5-31.7 5.5-51.3 9.3-58.9 11.4-7.6 2.1-16.9-1.7-27.9-11.4-11-9.6-9.3-13.8 5.2-12.4 14.5 1.4 42.4-1.4 83.7-8.3 1.4-24.8-2.1-48.9-10.3-72.3-13.8 0-25.8-2.7-36.2-8.3-10.3-5.5-5.9-8.9 13.4-10.3 19.3-1.4 44.1-5.8 74.4-13.4 30.3-7.6 53.4-13.8 69.2-18.6 15.8-4.8 28.6-3.8 38.2 3.1 9.6 6.9 9.6 12.4 0 16.5-9.7 4.1-27.6 9-53.7 14.5 17.9 8.3 24.8 15.9 20.7 22.7-4.1 6.9-6.2 22.1-6.2 45.5 26.2-4.1 47.5-7.6 64.1-10.3 16.5-2.7 31.7 1.7 45.5 13.4 13.8 11.7 9.3 16.5-13.4 14.5-22.7-2.1-54.8-0.3-96.1 5.2 1.4 52.4 2.7 94.7 4.1 127.1 1.4 32.4-0.7 58.5-6.2 78.5s-12.1 19.3-19.6-2.1c-7.6-21.4-9.3-39.3-5.2-53.7 4.1-14.5 5.5-63 4.1-145.7-15.2 1.4-35.1 4.8-59.9 10.3-5.6 44.1-16.6 77.1-33.1 99.2z m-17.6-309c15.8 3.5 29.3 9.7 40.3 18.6 11 9 13.4 20 7.2 33.1-6.2 13.1-14.1 13.1-23.8 0-9.7-13.1-20-25.8-31-38.2-10.9-12.5-8.5-16.9 7.3-13.5z m107.5 139.5c-2.1-11-5.9-21.3-11.4-31-24.8 4.1-44.8 7.6-59.9 10.3 12.4 11 17.9 20.7 16.5 28.9-1.4 8.3-2.1 22.1-2.1 41.3 23.4-4.1 43.4-7.6 59.9-10.3 0.1-15.1-0.9-28.2-3-39.2z m73.4-152.9c-8.3 6.9-20.3 19.6-36.2 38.2-15.9 18.6-31.7 33.1-47.5 43.4-15.9 10.3-18.6 9.3-8.3-3.1s21-30.6 32-54.8c11-24.1 14.8-41.3 11.4-51.7-3.5-10.3 5.8-10 27.9 1 22 11.2 28.9 20.1 20.7 27z" fill="#FFFFFF" p-id="24697"></path></svg>
                    </div>
                </a>

            </div>
        </div>
    )
}