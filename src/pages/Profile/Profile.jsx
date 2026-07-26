import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import HospitalInfoCard from "../../components/Profile/HospitalInfoCard";
import SecurityCard from "../../components/Profile/SecurityCard";
import QuickActions from "../../components/Profile/QuickActions";

import EditProfileModal from "../../components/Profile/Modals/EditProfileModal";
import ChangePasswordModal from "../../components/Profile/Modals/ChangePasswordModal";
import HospitalInformationModal from "../../components/Profile/Modals/HospitalInformationModal";
import LogoutConfirmationModal from "../../components/Profile/Modals/LogoutConfirmationModal";

import profile from "../../data/profile";

function Profile() {

  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(profile);

  const [activeModal, setActiveModal] = useState(null);

  const handleEditProfile = () => {
    setActiveModal("edit_profile");
  };

  const handleHospitalInformation = () => {
    setActiveModal("hospital_information");
  };

  const handleChangePassword = () => {
    setActiveModal("change_password");
  };

  const handleLogout = () => {
    setActiveModal("logout");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleSaveProfile = (updatedProfile) => {

    setProfileData(updatedProfile);

    setActiveModal(null);

  };

  const handleSaveHospital = (updatedHospital) => {

    setProfileData((prev) => ({
      ...prev,
      hospital: updatedHospital,
    }));

    setActiveModal(null);

  };

  const handleSavePassword = (passwordData) => {

    console.log(passwordData);

    setActiveModal(null);

  };

  const handleConfirmLogout = () => {

    

    setActiveModal(null);

    navigate("/");

    // Later:
    // Clear auth token
    // Navigate to login
    // Reset user session

  };

  const actionHandlers = {

    edit_profile: handleEditProfile,

    hospital_information: handleHospitalInformation,

    change_password: handleChangePassword,

    logout: handleLogout,

  };

  const handleAction = (key) => {

    actionHandlers[key]?.();

  };

  return (

    <div className="profile-page">

      <div className="profile-title">

        <h1>Admin Profile</h1>

        <p>
          Manage your account and hospital settings.
        </p>

      </div>

      <ProfileHeader profile={profileData} />

      <div className="profile-grid">

        <HospitalInfoCard hospital={profileData.hospital} />

        <SecurityCard security={profileData.security} />

      </div>

      <QuickActions
        actions={profileData.actions}
        onAction={handleAction}
      />

      {activeModal === "edit_profile" && (
        <EditProfileModal
          profile={profileData}
          onSave={handleSaveProfile}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === "change_password" && (
        <ChangePasswordModal
          onSave={handleSavePassword}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === "hospital_information" && (
        <HospitalInformationModal
          hospital={profileData.hospital}
          onSave={handleSaveHospital}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === "logout" && (
        <LogoutConfirmationModal
          onConfirm={handleConfirmLogout}
          onClose={handleCloseModal}
        />
      )}

    </div>

  );

}

export default Profile;