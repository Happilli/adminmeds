import { useState } from "react";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import HospitalInfoCard from "../../components/Profile/HospitalInfoCard";
import SecurityCard from "../../components/Profile/SecurityCard";

import EditProfileModal from "../../components/Profile/Modals/EditProfileModal";
import ChangePasswordModal from "../../components/Profile/Modals/ChangePasswordModal";
import HospitalInformationModal from "../../components/Profile/Modals/HospitalInformationModal";

import profile from "../../data/profile";

function Profile() {
  const [profileData, setProfileData] = useState(profile);
  const [activeModal, setActiveModal] = useState(null);

  const handleCloseModal = () => setActiveModal(null);

  const handleSaveProfile = (updatedProfile) => {
    setProfileData(updatedProfile);
    setActiveModal(null);
  };

  const handleSaveHospital = (updatedHospital) => {
    setProfileData((prev) => ({ ...prev, hospital: updatedHospital }));
    setActiveModal(null);
  };

  const handleSavePassword = (passwordData) => {
    console.log(passwordData);
    setActiveModal(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-on-surface mb-1">Admin Profile</h1>
        <p className="text-on-surface-variant text-sm">Manage your account and hospital settings.</p>
      </div>

      <ProfileHeader profile={profileData} onEdit={() => setActiveModal("edit_profile")} />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
        <HospitalInfoCard hospital={profileData.hospital} onEdit={() => setActiveModal("hospital_information")} />
        <SecurityCard
          security={profileData.security}
          onChangePassword={() => setActiveModal("change_password")}
        />
      </div>

      {activeModal === "edit_profile" && (
        <EditProfileModal profile={profileData} onSave={handleSaveProfile} onClose={handleCloseModal} />
      )}

      {activeModal === "change_password" && (
        <ChangePasswordModal onSave={handleSavePassword} onClose={handleCloseModal} />
      )}

      {activeModal === "hospital_information" && (
        <HospitalInformationModal
          hospital={profileData.hospital}
          onSave={handleSaveHospital}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default Profile;