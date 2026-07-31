import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileHeader from "../../components/Profile/ProfileHeader";
import HospitalInfoCard from "../../components/Profile/HospitalInfoCard";
import SecurityCard from "../../components/Profile/SecurityCard";

import ChangePasswordModal from "../../components/Profile/Modals/ChangePasswordModal";
import HospitalInformationModal from "../../components/Profile/Modals/HospitalInformationModal";

import { getProfile, updateProfile } from "../../api/profileApi";
import { changePasswordRequest } from "../../api/authApi";
import { uploadHospitalImage } from "../../api/profileApi";  

function Profile() {
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [passwordError, setPasswordError] = useState("");

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getProfile(token);

      setProfileData(data);
    } catch (err) {
      console.error("Failed to load profile:", err);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleCloseModal = () => {
    setActiveModal(null);
    setPasswordError("");
  };

  const handleSaveHospital = async (updatedHospital) => {
    try {
      const token = localStorage.getItem("token");

      const updated = await updateProfile(updatedHospital, token);

      setProfileData(updated);

      setActiveModal(null);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  const handleSavePassword = async (passwordData) => {
    setPasswordError("");

    try {
      const token = localStorage.getItem("token");

      await changePasswordRequest(
        {
          current_password: passwordData.current_password,
          new_password: passwordData.new_password,
        },
        token
      );

      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("email");

      navigate("/");
    } catch (err) {
      setPasswordError(err.message || "Failed to change password.");
    }
  };
  const handleImageUpload = async (file) => {
    try {
      const token = localStorage.getItem("token");

      const updatedHospital = await uploadHospitalImage(file, token);

      setProfileData(updatedHospital);
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to upload image.");
    }
  };

  if (!profileData) {
    return (
      <div className="flex items-center justify-center h-80 text-on-surface-variant">
        Loading hospital profile...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">

      <div>
        <h1 className="text-3xl font-bold text-on-surface">
          Hospital Profile
        </h1>

        <p className="text-sm text-on-surface-variant mt-1">
          Manage your hospital information and account security.
        </p>
      </div>

      <ProfileHeader
        profile={profileData}
        onEdit={() => setActiveModal("hospital_information")}
        onImageUpload={handleImageUpload}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">

        <HospitalInfoCard
          hospital={profileData}
          onEdit={() => setActiveModal("hospital_information")}
        />

        <SecurityCard
          security={profileData}
          onChangePassword={() => setActiveModal("change_password")}
        />

      </div>

      {activeModal === "hospital_information" && (
        <HospitalInformationModal
          hospital={profileData}
          onSave={handleSaveHospital}
          onClose={handleCloseModal}
        />
      )}

      {activeModal === "change_password" && (
        <ChangePasswordModal
          onSave={handleSavePassword}
          onClose={handleCloseModal}
          error={passwordError}
        />
      )}

    </div>
  );
}

export default Profile;