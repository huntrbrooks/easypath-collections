"use client"

import type React from "react"

import {
  User,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoggingIn(false)
    setIsLoggedIn(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  // Mock data for dashboard
  const caseData = {
    totalCases: 3,
    activeRecovery: 2,
    totalOwed: 47500,
    recovered: 12300,
    cases: [
      {
        id: "EP-2024-001",
        debtor: "ABC Trading Pty Ltd",
        amount: 15000,
        status: "In Progress",
        dateSubmitted: "2024-01-15",
        lastUpdate: "2024-01-28",
        progress: 65,
      },
      {
        id: "EP-2024-002",
        debtor: "XYZ Services",
        amount: 8300,
        status: "Recovered",
        dateSubmitted: "2024-01-10",
        lastUpdate: "2024-01-25",
        progress: 100,
      },
      {
        id: "EP-2024-003",
        debtor: "Quick Fix Solutions",
        amount: 24200,
        status: "Legal Action",
        dateSubmitted: "2024-01-20",
        lastUpdate: "2024-01-29",
        progress: 40,
      },
    ],
  }

  if (!isLoggedIn) {
    return (
      <>
        {/* Login Hero */}
        <section className="px-4 py-12 text-center bg-white">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">CLIENT</span>
              <br />
              <span className="text-green-600">PORTAL</span>
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Access your debt recovery cases and track progress in real-time.
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="px-4 py-12 bg-gray-50">
          <div className="max-w-sm mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Secure Login</h2>
                <p className="text-gray-600 text-sm mt-2">Enter your credentials to access your dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={loginData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={loginData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="••••••••"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-medium disabled:opacity-50"
                >
                  {isLoggingIn ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing In...
                    </div>
                  ) : (
                    "Sign In to Portal"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <a href="#" className="text-green-600 text-sm hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Don't have access?{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Contact us
                </a>{" "}
                to set up your portal.
              </p>
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="px-4 py-12 bg-white">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Portal Features</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Real-Time Progress</h3>
                  <p className="text-gray-600 text-sm">Track the status of all your debt recovery cases in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Document Access</h3>
                  <p className="text-gray-600 text-sm">Download reports, invoices, and legal documents</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Financial Overview</h3>
                  <p className="text-gray-600 text-sm">View recovered amounts and outstanding balances</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Dashboard Header */}
      <section className="px-4 py-6 bg-white border-b border-gray-200">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 text-sm">Welcome back, John Smith</p>
            </div>
            <Button
              onClick={() => setIsLoggedIn(false)}
              variant="outline"
              size="sm"
              className="text-gray-600 border-gray-300"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg text-center">
              <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{caseData.totalCases}</div>
              <p className="text-gray-600 text-sm">Total Cases</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{caseData.activeRecovery}</div>
              <p className="text-gray-600 text-sm">Active Recovery</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <DollarSign className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">${caseData.totalOwed.toLocaleString()}</div>
              <p className="text-gray-600 text-sm">Total Owed</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">${caseData.recovered.toLocaleString()}</div>
              <p className="text-gray-600 text-sm">Recovered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases List */}
      <section className="px-4 py-8 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Cases</h2>
          <div className="space-y-4">
            {caseData.cases.map((case_) => (
              <div key={case_.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{case_.debtor}</h3>
                    <p className="text-gray-600 text-sm">Case #{case_.id}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">${case_.amount.toLocaleString()}</div>
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        case_.status === "Recovered"
                          ? "bg-green-100 text-green-800"
                          : case_.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {case_.status === "Recovered" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {case_.status === "In Progress" && <Clock className="w-3 h-3 mr-1" />}
                      {case_.status === "Legal Action" && <AlertCircle className="w-3 h-3 mr-1" />}
                      {case_.status}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{case_.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${case_.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>Submitted: {case_.dateSubmitted}</span>
                  <span>Updated: {case_.lastUpdate}</span>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                    <Eye className="w-3 h-3 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                    <Download className="w-3 h-3 mr-1" />
                    Download Report
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-8 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white p-6 h-auto flex-col">
              <FileText className="w-6 h-6 mb-2" />
              <span className="text-sm">Submit New Case</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col bg-transparent">
              <Phone className="w-6 h-6 mb-2" />
              <span className="text-sm">Contact Support</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col bg-transparent">
              <Download className="w-6 h-6 mb-2" />
              <span className="text-sm">Download Reports</span>
            </Button>
            <Button variant="outline" className="p-6 h-auto flex-col bg-transparent">
              <Calendar className="w-6 h-6 mb-2" />
              <span className="text-sm">Schedule Call</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="px-4 py-8 bg-green-600 text-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-green-100 mb-6 text-sm">
            Our support team is here to help with any questions about your cases.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:0499682389" className="text-sm hover:underline">0499 682 389</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:contact@easypathcollections.com.au" className="text-sm hover:underline">contact@easypathcollections.com.au</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
