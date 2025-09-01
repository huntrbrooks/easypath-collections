"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign } from "lucide-react"
import { trackQuoteCalculation } from "@/lib/analytics"
import { useNavigation } from "@/components/navigation-context"

export function QuoteCalculator() {
  const { setCurrentPage } = useNavigation()
  const [debtAmount, setDebtAmount] = useState("")
  const [debtAge, setDebtAge] = useState("")
  const [showQuote, setShowQuote] = useState(false)

  const calculateQuote = () => {
    if (!debtAmount || !debtAge) return

    const amount = parseFloat(debtAmount.replace(/,/g, '')) || 0
    trackQuoteCalculation(amount)
    setShowQuote(true)
  }

  const getCommissionRate = () => {
    const amount = parseFloat(debtAmount.replace(/,/g, ''))
    const age = parseInt(debtAge)

    let baseRate = 20 // Base 20%
    
    // Adjust for debt age
    if (age <= 30) baseRate = 15
    else if (age <= 90) baseRate = 20
    else if (age <= 180) baseRate = 25
    else baseRate = 30

    // Adjust for debt amount
    if (amount >= 100000) baseRate -= 5
    else if (amount >= 50000) baseRate -= 2

    return Math.max(15, Math.min(30, baseRate)) // Keep between 15-30%
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatDebtAmount = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '')
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const handleDebtAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDebtAmount(e.target.value)
    setDebtAmount(formatted)
    setShowQuote(false)
  }

  const amount = parseFloat(debtAmount.replace(/,/g, '')) || 0
  const commissionRate = getCommissionRate()
  const estimatedRecovery = amount * 0.85 // Assume 85% recovery rate
  const ourFee = estimatedRecovery * (commissionRate / 100)
  const youReceive = estimatedRecovery - ourFee

  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quick Quote Calculator</h2>
          <p className="text-gray-600 text-sm">Get an instant estimate of our debt recovery service</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="debt-amount" className="block text-sm font-medium text-gray-700 mb-2">
                Outstanding Debt Amount (AUD)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  id="debt-amount"
                  value={debtAmount}
                  onChange={handleDebtAmountChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="50,000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="debt-age" className="block text-sm font-medium text-gray-700 mb-2">
                How old is this debt?
              </label>
              <select
                id="debt-age"
                value={debtAge}
                onChange={(e) => {
                  setDebtAge(e.target.value)
                  setShowQuote(false)
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select debt age</option>
                <option value="30">0-30 days</option>
                <option value="60">31-60 days</option>
                <option value="90">61-90 days</option>
                <option value="180">3-6 months</option>
                <option value="365">6-12 months</option>
                <option value="730">Over 1 year</option>
              </select>
            </div>

            <Button 
              onClick={calculateQuote}
              disabled={!debtAmount || !debtAge}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Calculate Quote
            </Button>
          </div>

          {showQuote && amount > 0 && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-600 mb-3">Your Estimated Quote</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Debt Amount:</span>
                  <span className="font-medium">{formatCurrency(amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expected Recovery (85%):</span>
                  <span className="font-medium">{formatCurrency(estimatedRecovery)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Our Fee ({commissionRate}%):</span>
                  <span className="font-medium">{formatCurrency(ourFee)}</span>
                </div>
                <div className="border-t border-green-200 pt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold text-green-600">You Receive:</span>
                    <span className="font-bold text-green-600 text-lg">{formatCurrency(youReceive)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-xs text-gray-600 text-center">
                  ✓ No Recovery, No Fee Guarantee<br />
                  ✓ This is an estimate based on typical cases<br />
                  ✓ Actual results may vary
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 mb-4">
            Ready to get started? Contact us for a detailed assessment.
          </p>
          <Button 
            onClick={() => setCurrentPage('contact')}
            className="bg-green-600 hover:bg-green-700"
          >
            Get Professional Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
