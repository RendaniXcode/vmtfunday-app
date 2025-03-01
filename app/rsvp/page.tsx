'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  emergencyPhone: string;
  attending: 'yes' | 'no';
  dietaryRestrictions: string;
  activities: string[];
  comments: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  cellPhone?: string;
  emergencyPhone?: string;
  activities?: string;
}

export default function RSVP() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    cellPhone: '',
    emergencyPhone: '',
    attending: 'yes',
    dietaryRestrictions: 'None',
    activities: [],
    comments: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  const dietaryOptions: string[] = [
    'None',
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Kosher',
    'Halal',
    'Nut Allergy'
  ];
  
  const activities: string[] = [
    'Volleyball',
    'Picnic Games',
    'Arts & Crafts',
    'Team Challenges',
    'Swimming',
    'Board Games'
  ];
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const { checked } = checkbox;
      
      const updatedActivities = checked
        ? [...formData.activities, value]
        : formData.activities.filter(activity => activity !== value);
        
      setFormData({
        ...formData,
        activities: updatedActivities
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.cellPhone.trim()) {
      newErrors.cellPhone = 'Cell phone number is required';
    } else if (!/^\+?[0-9\s\-()]+$/.test(formData.cellPhone)) {
      newErrors.cellPhone = 'Please enter a valid phone number';
    }
    
    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Emergency contact number is required';
    } else if (!/^\+?[0-9\s\-()]+$/.test(formData.emergencyPhone)) {
      newErrors.emergencyPhone = 'Please enter a valid phone number';
    }
    
    if (formData.attending === 'yes' && formData.activities.length === 0) {
      newErrors.activities = 'Please select at least one activity';
    }
    
    return newErrors;
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted successfully', formData);
        router.push(`/confirmation?name=${encodeURIComponent(formData.firstName)}`);
      } catch (error) {
        console.error('Error submitting form', error);
        alert('There was an error submitting your RSVP. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-16">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 gradient-text text-center">
        RSVP for VMT Fun Day
      </h1>
      
      <div className="w-full max-w-xl form-container">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields - Side by Side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input-field ${errors.firstName ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="First name"
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-400">{errors.firstName}</p>}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`input-field ${errors.lastName ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="Last name"
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-400">{errors.lastName}</p>}
            </div>
          </div>
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? 'border-red-500 ring-1 ring-red-500' : ''}`}
              placeholder="name.surname@gmail.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>
          
          {/* Phone Fields - Side by Side */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="cellPhone" className="block text-sm font-medium text-white mb-1">
                Cell Phone *
              </label>
              <input
                type="tel"
                id="cellPhone"
                name="cellPhone"
                value={formData.cellPhone}
                onChange={handleChange}
                className={`input-field ${errors.cellPhone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="(123) 456-7890"
              />
              {errors.cellPhone && <p className="mt-1 text-xs text-red-400">{errors.cellPhone}</p>}
            </div>
            
            <div>
              <label htmlFor="emergencyPhone" className="block text-sm font-medium text-white mb-1">
                Emergency Contact *
              </label>
              <input
                type="tel"
                id="emergencyPhone"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className={`input-field ${errors.emergencyPhone ? 'border-red-500 ring-1 ring-red-500' : ''}`}
                placeholder="(123) 456-7890"
              />
              {errors.emergencyPhone && <p className="mt-1 text-xs text-red-400">{errors.emergencyPhone}</p>}
            </div>
          </div>
          
          {/* Attending Radio Buttons & Dietary in one row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <span className="block text-sm font-medium text-white mb-1">
                Will you be attending? *
              </span>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="yes"
                    checked={formData.attending === 'yes'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 bg-gray-800 border-gray-600"
                  />
                  <span className="ml-2 text-white">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="attending"
                    value="no"
                    checked={formData.attending === 'no'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-500 focus:ring-blue-400 bg-gray-800 border-gray-600"
                  />
                  <span className="ml-2 text-white">No</span>
                </label>
              </div>
            </div>
            
            {formData.attending === 'yes' && (
              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-white mb-1">
                  Dietary Restrictions
                </label>
                <select
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="input-field"
                >
                  {dietaryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          {/* Activities Checkboxes (only if attending) */}
          {formData.attending === 'yes' && (
            <div>
              <span className="block text-sm font-medium text-white mb-1">
                Activities you&apos;re interested in: *
              </span>
              <div className="grid grid-cols-3 gap-1">
                {activities.map(activity => (
                  <label key={activity} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="activities"
                      value={activity}
                      checked={formData.activities.includes(activity)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-500 focus:ring-blue-400 bg-gray-800 border-gray-600"
                    />
                    <span className="ml-1 text-white text-sm">{activity}</span>
                  </label>
                ))}
              </div>
              {errors.activities && (
                <p className="mt-1 text-xs text-red-400">{errors.activities}</p>
              )}
            </div>
          )}
          
          {/* Additional Comments */}
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-white mb-1">
              Additional Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={2}
              className="input-field"
              placeholder="What&apos;s on your mind?"
            ></textarea>
          </div>
          
          {/* Form Actions */}
          <div className="flex justify-between pt-3">
            <Link 
              href="/"
              className="inline-flex items-center px-3 py-1.5 border border-gray-600 rounded-md text-sm font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              Back to Home
            </Link>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary flex items-center px-4 py-1.5 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit RSVP'
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}