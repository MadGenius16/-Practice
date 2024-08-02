import { useState } from "react";

import Profile from "./components/Profile/Profile";
import Section from "./components/Section/Section";
import { nanoid } from "nanoid";
// import Bar from "./components/Bar/Bar";
// import Modal from "./components/Modal/Modal";

import dataFromServer from "./components/db/Profiles.json";
import AddProfileForm from "./components/AddProfileForm/AddProfileForm";

function App() {
  const [showUserList, setShowUserList] = useState(false);
  const[users, setUsers]= useState(dataFromServer)
  const[filterValue, setFilterValue] = useState("")

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [bottles, setBottles] = useState({
  //   beer: 2,
  //   wine: 3,
  //   whiskey: 1,
  // });

  const handleClick = (userName) => {
    console.log("name: ", userName);
  };

const onAddProfile =(profile) =>{
  const finalProfile = {
    ...profile, id: nanoid()
  }

  setUsers([finalProfile, ...users])
}

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  const onDeleteProfile =(profileId)=>{
    setUsers(users.filter((item)=>item.id !==profileId))
  }

  const HandleFilter = (event)=>{
    const value = event.target.value;
    setFilterValue(value)
  }

  const filteredProfile = users.filter((profile)=>
    profile.name.toLowerCase().includes(filterValue.toLowerCase())
  )
  // const onBarSupplyAdd = (alcoName) => {
  //   setBottles({ ...bottles, [alcoName]: bottles[alcoName] + 1 });
  // };

  // const onOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const onCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  // const total = bottles.beer + bottles.wine + bottles.whiskey;

  return (
      <div>
        <Section>
      <AddProfileForm onAddProfile={onAddProfile}/>
        </Section>
      {/* <Section title="FSON105 weekend bar"> */}
        {/* <Bar
          beer={bottles.beer}
          wine={bottles.wine}
          whiskey={bottles.whiskey}
          total={total}
          onBarSupplyAdd={onBarSupplyAdd}
        />
      </Section> */}
      {/* <Section title="Modal">
        <button onClick={onOpenModal} type="button">
          Open Modal
        </button>
        {isModalOpen && <Modal onCloseModal={onCloseModal} />}
      </Section> */}
      <Section>
        <button type="button" onClick={toggleUserList}>
          Toggle User List
        </button>

        <div>
          <h2>Search profile</h2>
          <input 
          type="text" 
          placeholder="Enter profile name" 
          value={filterValue} 
          onChange={HandleFilter}/>
        </div>

        {showUserList && (
          <div>
            {filteredProfile.map((profile) => {
              return (
                <Profile
                  id={profile.id}
                  key={profile.id} // id
                  name={profile.name}
                  phone={profile.phone}
                  email={profile.email}
                  status={profile.status}
                  hasPhisicalAddress={profile.hasPhisicalAddress}
                  handleClick={handleClick}
                  onDeleteProfile={onDeleteProfile}
                />
              );
            })}
          </div>
        )}
      </Section>
    </div>
  );
}

export default App;