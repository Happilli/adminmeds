import "../FormSection.css";

function PersonalInformation() {

    return (

        <div className="form-section">

            <div className="section-heading">

                <h3>Personal Information</h3>

                <p>
                    Enter the doctor's basic personal information.
                </p>

            </div>

            <div className="form-grid">

                <div className="form-group">

                    <label>
                        First Name <span>*</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter first name"
                    />

                </div>

                <div className="form-group">

                    <label>
                        Last Name <span>*</span>
                    </label>

                    <input
                        type="text"
                        placeholder="Enter last name"
                    />

                </div>

                <div className="form-group">

                    <label>
                        Email <span>*</span>
                    </label>

                    <input
                        type="email"
                        placeholder="Enter email"
                    />

                </div>

                <div className="form-group">

                    <label>
                        Phone Number <span>*</span>
                    </label>

                    <input
                        type="tel"
                        placeholder="Enter phone number"
                    />

                </div>

                <div className="form-group">

                    <label>
                        Gender <span>*</span>
                    </label>

                    <select>

                        <option>Select Gender</option>

                        <option>Male</option>

                        <option>Female</option>

                        <option>Other</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>
                        Date of Birth
                    </label>

                    <input
                        type="date"
                    />

                </div>

                <div className="form-group full-width">

                    <label>
                        Address
                    </label>

                    <textarea
                        placeholder="Enter doctor's address"
                    />

                </div>

                <div className="form-group full-width file-upload">

                    <label>
                        Profile Picture
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                    />

                </div>

            </div>

        </div>

    );

}

export default PersonalInformation;