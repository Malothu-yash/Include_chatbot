import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import './UserDashboard.css'

const UserDashboard = () => {
  const [selectedPolicies, setSelectedPolicies] = useState(new Set())
  const navigate = useNavigate()

  const policies = [
    {
      id: 1,
      title: "Life Insurance Policy",
      description: "Secure your family's future with comprehensive life coverage",
      icon: "🛡️"
    },
    {
      id: 2,
      title: "Vehicle Insurance Policy",
      description: "Protect your vehicle with customizable coverage options",
      icon: "🚗"
    },
    {
      id: 3,
      title: "Health Insurance Policy",
      description: "Get the best healthcare coverage for you and your family",
      icon: "🏥"
    },
    {
      id: 4,
      title: "Home Insurance Policy",
      description: "Safeguard your home against unexpected damages",
      icon: "🏠"
    },
    {
      id: 5,
      title: "Government Insurance Policies",
      description: "Explore state-sponsored insurance schemes and benefits",
      icon: "🏛️"
    }
  ]

  const handlePolicyClick = (id) => {
    const selectedPolicy = policies.find(p => p.id === id)
    setSelectedPolicies(new Set([id]))

    if (selectedPolicy.title.includes("Health Insurance")) {
      navigate('/basic-questions', { state: { selectedPolicy } })
    } else if (selectedPolicy.title.includes("Government Insurance")) {
      navigate('/government-policies')
    } else {
      navigate('/basic-questions', { state: { selectedPolicy } })
    }
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Insurance Dashboard</h1>
        <div className="policy-grid">
          {policies.map(policy => (
            <div 
              key={policy.id}
              className={`policy-card ${selectedPolicies.has(policy.id) ? 'selected' : ''}`}
              onClick={() => handlePolicyClick(policy.id)}
            >
              <div className="policy-icon">{policy.icon}</div>
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
              {policy.title.includes("Government Insurance") && (
                <button className="explore-btn">
                  Explore Government Schemes →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
