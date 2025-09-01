export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  category: string
  readTime: number
  featured: boolean
}

// Mock blog posts - in a real app, this would come from a CMS or database
export const blogPosts: BlogPost[] = [
  {
    id: "debt-collection-best-practices-2024",
    title: "Debt Collection Best Practices for Australian Businesses in 2024",
    excerpt: "Learn the most effective strategies for debt collection while maintaining customer relationships and staying compliant with Australian laws.",
    content: `
# Debt Collection Best Practices for Australian Businesses in 2024

Debt collection is a critical aspect of maintaining healthy cash flow for any business. In Australia, there are specific regulations and best practices that businesses must follow to ensure effective and legal debt recovery.

## Understanding Australian Debt Collection Laws

The Australian Competition and Consumer Act 2010 (ACCA) and various state-based legislation govern debt collection practices. Key principles include:

- **Fair Treatment**: Debtors must be treated fairly and without harassment
- **Clear Communication**: All communications must be clear and truthful
- **Reasonable Contact**: Contact attempts must be reasonable and not excessive

## Best Practices for Internal Collections

### 1. Early Intervention
- Send payment reminders before the due date
- Follow up within 7 days of a missed payment
- Maintain professional communication throughout

### 2. Documentation
- Keep detailed records of all communications
- Document payment agreements and arrangements
- Maintain evidence of goods/services provided

### 3. Professional Communication
- Use clear, professional language
- Avoid threatening or intimidating language
- Provide multiple payment options

## When to Engage Professional Services

Consider professional debt collection when:
- Internal efforts have been unsuccessful for 60+ days
- The debt amount justifies professional intervention
- You need to maintain customer relationships
- Legal action may be required

## The EasyPath Advantage

At EasyPath Collections, we combine industry expertise with advanced technology to deliver results while maintaining your business relationships. Our approach includes:

- Compliant collection practices
- Skilled negotiation techniques
- Comprehensive reporting
- No recovery, no fee guarantee

Contact us today to learn how we can help recover your outstanding debts professionally and effectively.
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    category: "Best Practices",
    readTime: 5,
    featured: true
  },
  {
    id: "cash-flow-management-tips",
    title: "5 Essential Cash Flow Management Tips for Small Businesses",
    excerpt: "Discover practical strategies to improve your business cash flow and reduce the risk of bad debts.",
    content: `
# 5 Essential Cash Flow Management Tips for Small Businesses

Cash flow is the lifeblood of any business. Poor cash flow management is one of the leading causes of business failure, even for profitable companies.

## 1. Implement Clear Credit Policies

Establish clear credit terms and communicate them upfront:
- Define payment terms (e.g., Net 30)
- Set credit limits based on customer assessment
- Require deposits for large orders
- Use credit applications for new customers

## 2. Invoice Promptly and Accurately

- Send invoices immediately upon delivery
- Ensure invoices are clear and detailed
- Include payment terms and due dates
- Use professional invoicing software

## 3. Follow Up on Overdue Accounts

- Send payment reminders at 7, 14, and 30 days overdue
- Make phone calls for significant amounts
- Offer payment plans when appropriate
- Know when to engage professional help

## 4. Monitor Your Accounts Receivable

- Prepare aging reports monthly
- Calculate days sales outstanding (DSO)
- Identify problematic customers early
- Set aside reserves for bad debts

## 5. Consider Professional Debt Collection

When internal efforts fail, professional debt collection services can:
- Recover debts you thought were lost
- Free up your time to focus on business growth
- Maintain customer relationships through professional handling
- Provide legal expertise when needed

## Conclusion

Effective cash flow management requires proactive approaches and professional support when needed. At EasyPath Collections, we help businesses recover outstanding debts while you focus on growing your business.

Contact us for a free consultation on your debt recovery needs.
    `,
    author: "Michael Chen",
    publishedAt: "2024-01-10",
    category: "Cash Flow",
    readTime: 4,
    featured: false
  },
  {
    id: "legal-debt-collection-australia",
    title: "Understanding Legal Debt Collection in Australia",
    excerpt: "A comprehensive guide to the legal aspects of debt collection in Australia, including your rights and obligations.",
    content: `
# Understanding Legal Debt Collection in Australia

Debt collection in Australia is governed by a complex framework of federal and state legislation. Understanding these laws is crucial for both creditors and debtors.

## Key Legislation

### Federal Laws
- **Australian Consumer Law (ACL)**: Part of the Competition and Consumer Act 2010
- **Privacy Act 1988**: Governs how personal information is handled
- **Corporations Act 2001**: Relevant for corporate debtors

### State Laws
Each state has specific debt collection regulations:
- Fair Trading Acts
- Commercial Agents and Private Inquiry Agents Acts
- Court procedures for debt recovery

## Your Rights as a Creditor

As a creditor, you have the right to:
- Pursue legitimate debts through legal means
- Engage professional debt collectors
- Take legal action through appropriate courts
- Seek payment of interest and costs (where applicable)

## Prohibited Practices

Debt collectors cannot:
- Use physical force or threats
- Contact debtors at unreasonable hours
- Harass or intimidate debtors
- Misrepresent the consequences of non-payment
- Contact third parties without permission (with limited exceptions)

## The Collection Process

### 1. Pre-legal Action
- Demand letters
- Phone contact
- Payment arrangements
- Negotiation

### 2. Legal Action
- Letter of demand from solicitor
- Court proceedings
- Judgment enforcement
- Asset recovery

## Working with Professional Collectors

Licensed debt collection agencies like EasyPath Collections:
- Understand all relevant legislation
- Follow compliant collection practices
- Have established legal networks
- Can escalate to legal action when necessary

## Conclusion

Effective debt collection requires understanding of legal requirements and professional expertise. Don't risk non-compliance - work with licensed professionals who understand the law.

Contact EasyPath Collections for compliant, effective debt recovery services.
    `,
    author: "Lisa Thompson",
    publishedAt: "2024-01-05",
    category: "Legal",
    readTime: 6,
    featured: false
  }
]

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}
