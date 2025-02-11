import React, { useState, useEffect } from 'react';

function Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyName: '',
        contactNumber: '',
        servicesOffered: '',
        contactInfo: '',
        portfolio: '',
        workSummary: '',
        websiteOverview: '',
        testimonials: '',
        achievements: '',
        clients: '',
        teamInfo: '',
        images: '',
        additionalInfo: '',
        driveLink: ''
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    // Check if the current step's fields are filled
    const validateStep = () => {
        switch (step) {
            case 1:
                return formData.companyName && formData.contactNumber && formData.servicesOffered;
            case 2:
                return formData.contactInfo && formData.portfolio && formData.workSummary;
            case 3:
                return formData.websiteOverview && formData.testimonials && formData.achievements;
            case 4:
                return formData.clients && formData.teamInfo && formData.images;
            case 5:
                return formData.additionalInfo && formData.driveLink;
            default:
                return false;
        }
    };

    // Enable/Disable the "Next" button based on the validation
    useEffect(() => {
        setIsNextEnabled(validateStep());
    }, [formData, step]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result); // Set the image preview
                setFormData({ ...formData, images: file.name }); // Store image name
            };
            reader.readAsDataURL(file);
        }
    };

    const nextStep = () => {
        if (isNextEnabled) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <form className="form-container">
            {/* Step 1 */}
            {step === 1 && (
                <div>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Enter your company's official name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Provide a primary contact number for communication"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="servicesOffered"
                        placeholder="Briefly list the services your company provides"
                        value={formData.servicesOffered}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <div className="button-group">
                        <button type="button" className="form-button" onClick={nextStep} disabled={!isNextEnabled}>
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <div>
                    <input
                        type="text"
                        name="contactInfo"
                        placeholder="Include an email address, office address, and other relevant details"
                        value={formData.contactInfo}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="portfolio"
                        placeholder="Share a link to your work or attach examples"
                        value={formData.portfolio}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="workSummary"
                        placeholder="Provide a summary of the key projects or achievements"
                        value={formData.workSummary}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <div className="button-group">
                        <button type="button" className="form-button" onClick={prevStep}>
                            Previous
                        </button>
                        <button type="button" className="form-button" onClick={nextStep} disabled={!isNextEnabled}>
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
                <div>
                    <input
                        type="text"
                        name="websiteOverview"
                        placeholder="Write a brief description of your website"
                        value={formData.websiteOverview}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="testimonials"
                        placeholder="Add feedback or reviews from your clients"
                        value={formData.testimonials}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="achievements"
                        placeholder="List your company's awards, recognitions, or milestones"
                        value={formData.achievements}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <div className="button-group">
                        <button type="button" className="form-button" onClick={prevStep}>
                            Previous
                        </button>
                        <button type="button" className="form-button" onClick={nextStep} disabled={!isNextEnabled}>
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
                <div>
                    <input
                        type="text"
                        name="clients"
                        placeholder="Mention notable companies or organizations you've collaborated with"
                        value={formData.clients}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="teamInfo"
                        placeholder="Provide brief bios or details about your team members"
                        value={formData.teamInfo}
                        onChange={handleChange}
                        className="form-input"
                    />
                    <input
                        type="file"
                        name="images"
                        onChange={handleImageChange}
                        className="form-input"
                    />

                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" className="preview-image" />
                        </div>
                    )}
                    <p>Upload relevant images, such as team photos, office pictures, or product showcases</p>
                    <div className="button-group">
                        <button type="button" className="form-button" onClick={prevStep}>
                            Previous
                        </button>
                        <button type="button" className="form-button" onClick={nextStep} disabled={!isNextEnabled}>
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Step 5 */}
            {step === 5 && (
                <div>
                    <input
                        type="text"
                        name="additionalInfo"
                        placeholder="Share any extra details you'd like to include"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <input
                        type="text"
                        name="driveLink"
                        placeholder="Provide a link to your stock images"
                        value={formData.driveLink}
                        onChange={handleChange}
                        className="form-input"
                    />

                    <div className="button-group">
                        <button type="button" className="form-button" onClick={prevStep}>
                            Previous
                        </button>
                        <button type="submit" className="form-button">
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}

export default Form;
