# Titan Email Setup for easypathcollections.com.au

## DNS Records Required

### MX Records (Email Routing)
1. **MX Record 1**
   - Type: MX
   - Priority: 10
   - Host: @ (or leave blank)
   - Value: mx1.titan.email
   - TTL: 3600

2. **MX Record 2**
   - Type: MX
   - Priority: 20
   - Host: @ (or leave blank)
   - Value: mx2.titan.email
   - TTL: 3600

### TXT Records (Email Authentication)
3. **SPF Record**
   - Type: TXT
   - Host: @ (or leave blank)
   - Value: v=spf1 include:_spf.titan.email ~all
   - TTL: 3600

4. **DMARC Record**
   - Type: TXT
   - Host: _dmarc
   - Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@easypathcollections.com.au
   - TTL: 3600

## Steps to Add in CrazyDomains

1. **Log into CrazyDomains Control Panel**
2. **Go to DNS Management**
   - Look for "DNS Settings" or "DNS Management"
   - Or "Advanced Settings" → "DNS"

3. **Add MX Records**
   - Click "Add Record"
   - Select "MX" as record type
   - Add both MX records with priorities 10 and 20

4. **Add TXT Records**
   - Click "Add Record"
   - Select "TXT" as record type
   - Add SPF and DMARC records

5. **Remove Conflicting Records**
   - Delete any existing MX records for other email services
   - Remove any conflicting SPF records

## Verification Steps

1. **Check DNS Propagation**
   - Use tools like dnschecker.org
   - Enter: easypathcollections.com.au
   - Verify MX records show Titan servers

2. **Test Email Delivery**
   - Send test email to contact@easypathcollections.com.au
   - Check if received in Titan inbox

3. **Check Authentication**
   - Use mail-tester.com to verify SPF/DMARC setup

## Common Issues & Solutions

### Issue: Emails not receiving
**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify MX records are correct
- Check for conflicting MX records

### Issue: Emails going to spam
**Solution:**
- Ensure SPF record is added
- Add DMARC record
- Check Titan's sending reputation

### Issue: Can't send emails
**Solution:**
- Verify Titan account is activated
- Check SMTP settings in email client
- Ensure proper authentication

## Titan Email Client Settings

### IMAP Settings (Incoming)
- Server: imap.titan.email
- Port: 993
- Security: SSL/TLS
- Username: contact@easypathcollections.com.au

### SMTP Settings (Outgoing)
- Server: smtp.titan.email
- Port: 587
- Security: STARTTLS
- Username: contact@easypathcollections.com.au

## Support Contacts

- **Titan Support:** support@titan.email
- **CrazyDomains Support:** Available in control panel
- **DNS Check Tool:** dnschecker.org

## Timeline
- **DNS Changes:** 24-48 hours to propagate globally
- **Email Setup:** Immediate after DNS propagation
- **Full Functionality:** 48-72 hours for all features
