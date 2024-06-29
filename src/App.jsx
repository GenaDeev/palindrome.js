import { useState, useEffect } from 'react';

export default function App() {
  const [isPalindrome, setIsPalindrome] = useState(null);
  const [word, setWord] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setWord(input);
    if (input.length > 0) {
      const isPal = input === input.split("").reverse().join("");
      setIsPalindrome(isPal);
    } else {
      setIsPalindrome(null);
    }
  };
  //svg animation
  const [fadeClass, setFadeClass] = useState('fade-out');

  useEffect(() => {
    if (isPalindrome !== null) {
      setFadeClass('fade-in');
    }
  }, [isPalindrome]);

  return (
    <main className="h-full flex flex-col items-center justify-betweengap-6">
      <section className='justify-center flex h-full flex-col items-center gap-4'>
        <svg xmlns="http://www.w3.org/2000/svg" className="text-orange-400 hover:scale-110 transition duration-200" width="128" height="128" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
          <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
          <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
          <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
          <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
          <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
          <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
        </svg>
        <h1 className="font-bold text-6xl">Palindrome<span className="text-orange-400">.JS</span></h1>
        <div className="relative w-2/3 h-12 mt-4">
          <input
            value={word}
            onInput={handleInput}
            className="peer w-full h-full border-t-white bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-orange-400"
            placeholder=""
          />
          <label className="text-orange-400 flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-orange-400 before:border-blue-gray-200 peer-focus:before:!border-orange-400 after:border-blue-gray-200 peer-focus:after:!border-orange-400">Input
            some palindrome
          </label>
        </div>

        <p className={
          isPalindrome === true ? 'font-bold text-2xl text-orange-400' :
            isPalindrome === false ? 'font-bold text-2xl text-red-500' :
              isPalindrome === null ? 'font-bold text-2xl text-white' : ''
        }>
          {isPalindrome === null ? "" : isPalindrome ? "It's a palindrome!" : "It's not a palindrome"}
        </p>

        <div className='p-4'>
          {isPalindrome === null ? (
            <></>
          ) : isPalindrome === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`animate-bounce svg-transition ${fadeClass}`}
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
              <path d="M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" />
              <path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
              <path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
            </svg>
          ) : isPalindrome === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`animate-bounce svg-transition ${fadeClass}`}
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M9 10l.01 0" />
              <path d="M15 10l.01 0" />
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
            </svg>
          ) : (
            <></>
          )}
        </div>
      </section>
      <section title='Credits' className='flex items-center p-4 gap-2'>
        <h3 className='font-mono'>Coded with love by <a className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-[length:180%_180%] hover:bg-right-bottom active:bg-[length:100%_100%] inline-block text-transparent bg-clip-text transition-all duration-500' href='https://linkedin.com/in/genadev/'>GenaDev</a></h3>
        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="currentColor" />
        </svg>
        <a href='https://github.com/GenaDeev'><svg viewBox="0 0 256 250" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" /></svg></a>
      </section>
    </main>
  );
}
