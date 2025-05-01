import SignUpPart from '../components/SignUpPart';
import PersonalInfoPart from '../components/PersonalInfoPart';
import MoreInfoPart from '../components/MoreInfoPart';
import logo from '../assets/logo.png';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    food: ''
  });

  const RegisterUser = async (e) => {
    const { username, email, password, firstName, lastName, address, phone, food } = data;
    e.preventDefault();
    try {
      await axios.post('/register', {
        username,
        email,
        password,
        firstName,
        lastName,
        address,
        phone,
        food
      });
      alert("Registration successful");
    } catch (error) {
      alert("Registration failed");
    }
  };

  const titles = ["User Info", "Personal Info", "More Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpPart data={data} setData={setData} />;
    } else if (page === 1) {
      return <PersonalInfoPart data={data} setData={setData} />;
    } else {
      return <MoreInfoPart data={data} setData={setData} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#DAA520] via-[#A0522D] to-[#4B2E2E] flex flex-col justify-center py-16 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-20 w-auto" src={logo} alt="logo" />
        <h1 className="mt-6 text-center text-4xl font-extrabold text-white drop-shadow-lg">
          {titles[page]}
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white bg-opacity-10 backdrop-blur-md py-10 px-6 shadow-lg rounded-xl sm:px-12">
          <div className="text-white">{PageDisplay()}</div>

          <div className="flex flex-row gap-4 pt-8">
            <button
              disabled={page === 0}
              onClick={() => setPage((currPage) => currPage - 1)}
              className={`w-full justify-center rounded-md py-2 px-4 text-sm font-semibold transition-all ${
                page === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#4B2E2E] text-white hover:bg-[#000000]'
              }`}>
              Prev
            </button>

            <button
              onClick={(e) => {
                if (page === titles.length - 1) {
                  alert('Form Submitted');
                  RegisterUser(e);
                  console.log(data);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="w-full justify-center rounded-md py-2 px-4 bg-[#DAA520] text-black font-semibold text-sm hover:bg-[#A0522D] transition-all">
              {page === titles.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
