// Uses Cohere API (free trial key) — no SDK needed, direct REST call

const KNOWLEDGE_BASE = `
=== TATVACARE OPERATIONAL KNOWLEDGE BASE ===

--- SECTION: CGM — WHAT IS IT & HOW IT WORKS ---
A Continuous Glucose Monitor (CGM) is a wearable device that tracks a person's glucose levels automatically, day and night, without repeated finger-pricks.
- A tiny sensor sits just under the skin and measures glucose in interstitial fluid
- A transmitter sends readings to the app
- The customer sees live trends and alerts on their mobile
- Readings become visible approximately 65 minutes after installation
- The sensor needs 24 hours to fully stabilize to the body's chemistry
- Flow: Sensor (under skin) → Transmitter (sends data) → Mobile App → Glucose Data (trends + alerts) → Customer

Benefits:
- Continuous, real-time glucose readings — no repeated finger-pricks
- Trend arrows show if glucose is rising or falling
- Low/high alerts help prevent emergencies
- Data history helps identify patterns over time
- Simple app-based setup

--- SECTION: TYPES OF CGM WE SUPPORT ---
1. GoodFlip CGM — Primary supported brand. Full app + sensor SOP. Metabase/Freshdesk support.
2. Diasens CGM — Same error-code framework as GoodFlip. Separate brand routing on escalation.
3. Glucolive CGM — Same core installation and troubleshooting principles apply.
All three brands follow the same installation, troubleshooting, and replacement procedures.

--- SECTION: CGM APP INSTALLATION STEPS ---
1. Download the App — Install the brand app (GoodFlip / Diasens / Glucolive) from Play Store or App Store.
2. Create Account / Login — Register with customer's mobile number and verify via OTP.
3. Grant Permissions — Allow Bluetooth and Location access. Both are required for continuous data sync.
4. Pair the Transmitter — Scan the QR code or enter the serial number printed on the transmitter.
5. Confirm Connection — Check the home screen shows a 'Connected' status.
6. Wait for Initialization — Allow the app to complete the initialization phase before ending the visit.

--- SECTION: PHYSICAL SENSOR PLACEMENT ---
Recommended Zones:
- Option 1: Back of upper arm (target fleshy posterior area; avoid triceps muscle core and heavy scars)
- Option 2: Abdomen (apply at least 2 inches away from navel; avoid waistband friction lines)
- Option 3: Buttocks / Lower Back

Placement Steps:
1. Choose the recommended zone.
2. Clean and dry the area with an alcohol swab; let it air-dry fully.
3. Remove the applicator cap and press firmly to insert the sensor.
4. Snap the transmitter onto the sensor base until it clicks.
5. Activate in the app and wait for 'Connected' confirmation.
6. Apply an overpatch for extra hold, especially in hot or humid weather.

CRITICAL: Wrong placement + reading issues later = NO replacement under policy. Applying sensors to non-recommended body sites voids replacement eligibility if reading issues arise.

--- SECTION: CUSTOMER DO'S AND DON'TS — DEVICE CONNECTION ---
- Do NOT uninstall the app — removes connection and data tracking, can cause transmitter disconnection requiring full reconnection.
- Avoid multi-device logins — signing in from multiple smartphones causes disconnection and pauses in readings.
- Keep Bluetooth AND Location ON at all times on the smartphone.

--- SECTION: CUSTOMER DO'S AND DON'TS — DEVICE SAFETY ---
- Device is IP58-rated — safe for normal showering and sweat, but avoid prolonged submersion.
- Do NOT submerge deeper than 1 meter or for longer than 30 continuous minutes.
- Avoid warm/hot water exposure.
- No direct physical impact on the sensor or transmitter (knocks, drops, pressure).
- Avoid sauna, cryotherapy, ice baths, steam baths, jacuzzi, or regular swimming while wearing.
- Be careful not to hit the sensor on door frames or rub it off while towel-drying.
- Don't squeeze or twist skin near the sensor, especially while sleeping.
- If the patient has less subcutaneous tissue on the arm/abdomen, choose the site carefully.

--- SECTION: GOODFLIP APP USAGE ---
- View Sugar Reading: Open the app home screen to see the live glucose value, trend arrow, and graph.
- Download Report: Go to Reports (or History) inside the app and export/download the glucose report for the selected date range.
- Raise a Ticket: Use the in-app Support/Help section to raise a support ticket, attaching screenshots or logs if needed.
Support Channels: GoodFlip App Ticket Submission | Direct Phone Call | In-App Live Support Chat

--- SECTION: TROUBLESHOOTING CHECKLIST (RUN THIS FIRST BEFORE ANY REPLACEMENT) ---
Step 1 — Product Placement Check:
- Confirm the sensor is properly placed at the right site.
- Ensure the transmitter is securely fitted (no loose connection).

Step 2 — Bluetooth & Connectivity Check:
- Verify the device is within Bluetooth range of the phone.
- Reset Bluetooth and reopen the app.
- Check for a stable internet connection; reconnect and verify readings.

Step 3 — Hardware Re-check:
- Remove the transmitter; check for moisture or blood.
- Clean electrodes with dry cotton.
- Reattach and wait 30 minutes for readings to stabilize.

Step 4 — Escalation:
- If still not working → escalate to the brand's Tech Team via the support channel.

--- SECTION: ERROR CODES & FIXES ---
Error 103 — Current Small:
- Cause: Improper use, body rejection, or movement.
- Fix: Remove and clean transmitter, press firmly for 30 seconds, wait 30–60 minutes.
- Replacement: Only if issue persists after reconnection AND support confirms.

Error 104 — Binding Fail:
- Cause: Transmitter not fetching data or not connecting to phone.
- Fix: Reinstall app, charge transmitter until light turns blue, reconnect, wait for initialization.
- Replacement: Transmitter replaced if error still shows after full reconnection.

Error 11 — Noise:
- Cause: Improper use or electrode breakage from body movement.
- Fix: Remove, clean, reattach — press 30 seconds, wait for reading to stabilize.
- Replacement: After 24 hours of troubleshooting, confirmed by support team.

Error 12 — Sensitivity Attenuation:
- Cause: Body rejection reaction.
- Fix: None — needs a new sensor.
- Replacement: After support team confirmation.

Error 13 — Take Off:
- Cause: Poor connection, transmitter moved, or tape came off.
- Fix: Remove, clean, reattach — press 30 seconds, wait for reading to stabilize.
- Replacement: After 24 hours of troubleshooting, confirmed by support team.

Error 14 — Electrode Breakage:
- Cause: Electrode broken, usually from mishandling.
- Fix: New sensor for genuine cases only — photo of broken electrode required.
- Replacement: After confirmation, genuine cases only.

Error 15 — Touch / Poor Connection:
- Cause: Poor connection between sensor and transmitter.
- Fix: Remove transmitter, clean it thoroughly, reattach to sensor, listen for the click confirming correct placement.
- Replacement: After support team confirmation.
- NOTE: Always run Error 15 steps BEFORE comparing BGM vs CGM readings.

Error 16 — Water Flooding:
- Cause: Waterproof failure, water got inside.
- Fix: Dry the sensor and transmitter with cloth; wait to return to normal.
- Replacement: After 48 hours of observation and approval.

--- SECTION: SPECIAL SCENARIOS ---
Charging Issues:
- Light stuck or not blinking: try a different socket and cable first.
- Still not working: replacement can be given.
- NEVER charge mid-session — it resets the 14-day session and loses all data continuity.

High Readings (400+) With Blood:
- Little blood: clean with cotton, reattach, recheck readings.
- Excessive blood: remove the sensor — replacement approved.

Sensor Fell Off:
- Replace only if: within 10 days AND the adhesive itself was faulty.
- NOT covered: physical impact, sleeping pressure, or customer removed it themselves.
- Suggest overpatch in hot weather to prevent fall-off.

Wrong Placement:
- Recommended spots: back of arm, abdomen, or lower back/buttocks.
- If placed elsewhere and readings are off: NO replacement for that reason.

Transmitter Troubleshooting:
- Binding Failed: Remove transmitter → charge till light turns blue → uninstall app → reinstall → login with same mobile → connect transmitter & sensor → wait for initialization.
- Transmitter Not Fetching: Turn off Bluetooth → put transmitter in charging pod (start then remove) → check if paired with phone Bluetooth → unpair and reconnect.
- Charging Issues: Charge with provided cable/adapter until light turns blue → try different socket if stuck → replacement given if still failing → NEVER charge mid-session.

--- SECTION: BGM VS CGM READINGS DIFFERENCE ---
Why they differ:
- CGM measures glucose in interstitial fluid; BGM measures capillary whole blood — there is a natural physiological time lag.
- When glucose is stable, the difference is minimal and values closely align.
- During rapid glucose changes, the time lag becomes more pronounced.
- In the first 24 hours, a variance above 20% is normal — do NOT compare or replace within first 24 hours.

Before comparing readings — ALWAYS run Error 15 steps first:
1. Remove the transmitter
2. Clean it thoroughly
3. Reattach to the sensor
4. Listen for the click confirming correct placement
Only proceed to readings comparison once this check is complete.

Verification Steps:
- Ask customer to test with a certified glucometer (Accu-Chek, Contour, or OneTouch):
  - Fasting (before breakfast)
  - 2 hours after lunch
  - 2 hours after dinner
- Share both glucometer and CGM app images together.
- Only compare when CGM triggers a low/high alert.

Acceptable Difference:
- Under 30 mg/dL difference: normal, no action needed.
- Over 30 mg/dL in 2 of 3 readings: replacement may apply (within the 10-day window).
- First 24 hours: variance over 20% is normal — do not replace.

--- SECTION: REPLACEMENT POLICY ---
Core Rule: Replacement is valid ONLY if a support ticket was raised within the first 10 DAYS of installation — for both sensor and transmitter. No replacement after the 10-day window, regardless of the issue.

What is NOT covered (voids replacement):
- Damage from user error, mishandling, or improper placement.
- Premature removal without prior support consultation.
- Accidental physical impact.
- Improper handling or storage.
- Physical device tampering.
- Wrong sensor placement site.
- Removal after 10 days of use.

What IS covered:
- Sensor Malfunction: No glucose readings for more than 48 consecutive hours.
- Reading Anomalies: Continuous Low/High alerts for more than 48 hours without clinical symptoms.
- Transmitter Charging Failure: Fails to charge (>1.5-2 hours), white light fails to turn blue, stays solid without blinking, or no light display.
- Premature Battery Death: Transmitter battery discharges completely before completing the 14-day study.
- Reading discrepancy over 30 mg/dL in 2 of 3 readings (within 10-day window).

Documents Required for Replacement:
1. Product placement image (latest)
2. App screenshot — Home page and CGM page
3. Log file (for data/reading issues)
4. Broken electrode photo (Error 14 only)
5. Glucometer comparison images (for readings claims)
6. Serial number (SN) of sensor/transmitter
7. Battery percentage

Accuracy Verification for Replacement (Glucolive SOP):
- Mandatory photographic evidence required:
  - Early Morning Fasting reading
  - 2 Hours Post-Lunch reading
  - 2 Hours Post-Dinner reading
  - Clear photo of applied sensor position
- All images must clearly display glucometer reading, date, and time stamp.
- Glucometer used must be certified: Accu-Chek, Contour, or OneTouch.

--- SECTION: REPLACEMENT WORKFLOW ---
Step 1: Customer reports fault via GoodFlip App or direct call.
Step 2: First-level troubleshooting by GoodFlip Support team.
Step 3: If unresolved, share details with Tracky Team.
Step 4: Tracky reviews and confirms approval.
Step 5: Replacement processed and dispatched. Customer ships faulty unit in original packaging (courier paid by customer).

TRACKY IS THE FINAL APPROVAL AUTHORITY. Always complete first-level troubleshooting before escalating to Tracky.

Escalation Format (must include all of the following):
- Customer Name and Mobile Number
- Query Type (Product Issue / App Issue)
- Troubleshoot Description (steps taken)
- Brand (GoodFlip / Diasens / Glucolive)
- Product Placement — Latest Image
- App Screenshot (Homepage and CGM Page)
- Log File (if data issue)
- Battery Percentage

Points of Contact:
- Data / Tech Issue: POC — Aruna / Yash
- Product Issue: POC — Dilip / Vaishnavi

--- SECTION: SUPPORT SLAS & OPERATING HOURS ---
Mon–Sat (Standard): 9:30 AM – 9:30 PM | Troubleshooting TAT: Within 4 Hours | Final Resolution: Within 24 Hours
Sunday (Standard): 10:00 AM – 7:00 PM | Troubleshooting TAT: Within 4 Hours | Final Resolution: Within 24 Hours
Mon–Sat (After 9:30 PM): Outside Operating Hours | Response: Next Morning at 9:30 AM | Final Resolution: Within 24 Hours
Sunday (After 7:00 PM): Outside Operating Hours | Response: Next Business Window | Final Resolution: Within 24 Hours

Key Metrics:
- Troubleshooting SLA: 4 hours
- Final Resolution SLA: 24 hours
- Usage Limit Cutoff for Replacement: 10 days
- Standard CGM Wear Period: 14 days

--- SECTION: GLUCOLIVE CGM INSTALLATION TRACKS ---
Track 1 — Self Installation:
- Patient scans QR code on packaging box.
- Downloads and registers on GoodFlip App.
- Initializes patient study journey.
- Guided step-by-step video tutorials available in English and Hindi.

Track 2 — Virtual Installation:
- Booked via Dayschedule platform.
- Zydus team can book on patient's behalf.
- Instant meeting link generated and sent.
- Support specialist connects at confirmed time and guides sensor site prep, applicator deployment, and transmitter pairing.
- No-Show Protocol: 5-minute buffer → call via Ozontel → if unanswered, secondary attempt after 2 hours → status updated to 'No Show' → auto-rebooking link sent via WhatsApp/SMS.

Track 3 — In-Clinic Installation:
- Dedicated clinic staff trained every two weeks.
- Sales reps, clinic staff, or patients can request virtual support during installation.
- Virtual help provided via Dayschedule.

Doctor–Patient Mapping for CGM Visibility:
1. Create doctor account on TattvaPractice platform.
2. A unique Doctor ID is generated after account setup.
3. Patient enters and maps the Doctor ID in the GoodFlip app.
4. After successful mapping, doctor can view CGM data in real time.

Remote Care (Family Sharing):
- User grants CGM access to chosen family members.
- Approved members can view glucose information in real time.
- Remote sharing starts when the user provides access in the app.

--- SECTION: GLP CARE PLAN FLOW ---
GLP (Glucagon-Like Peptide) care plan includes GLP medicine (weight loss injections like Ozempic/Monjaro) in addition to other supplements. Other care plans follow the same steps but without GLP medicine.

Step 1 — Purchase & Handover:
- User purchases the plan.
- Lateo fills the onboarding form.
- Wait 10–15 minutes.
- Sales team initiates a conference call with the user.
- If connection is made: Sales sends System 8 message template to user (what to do next).
- If no connection: User is flagged to PM Team.

Step 2 — Plan & Coach Assignment:
- Plan and Coach Assignment sent to OPS (Curve Fill).
- Within working hours (Mon–Sat 8am–11pm, Sun 8am–9pm): Assign plan and coach within 15 minutes.
- Outside working hours: Assign next working day (first available slot).
- Coach Tool Check: Minimum 1 slot per day for next 5 days; check tools and future availability.

Step 3 — Product Dispatch:
- Products dispatched: Pharmaceuticals, Nutraceuticals (NLT, CDM, BCA).
- Dispatched immediately after plan and coach assignment.

Step 4 — DR Booking:
- User books DR via App.
- If successful: DR Booked → Diagnostic/Consultant Report Submission.
- If unsuccessful: User contacts Support → OA and IA Ops Team books appointment or processes refund.

Step 5 — DR Consultation:
- User books DR Consultation via App.
- If successful: DR Consult Booked → Doctor Consultation Happens → Free follow-up within 7 days.
- If unsuccessful: User contacts Support → OA and IA Ops Team books or processes refund.

Step 6 — Prescription & Drug Dispatch:
- If doctor needs additional tests: Additional Tests Required → Dr. Prescription Sent → Test Results Received → Dr. Reviews and Prescribes → Drug Dispatch begins.
- If doctor denies (clinical transition): Escalated — marked as Dr. Denied (Clinical Transition).
- If doctor prescribes: Prescription Prescribed → Drug dispatched → Post follow-up consultation.

GLP vs Other Care Plans:
- GLP care plan includes GLP medicine (weight loss injections like Ozempic, Monjaro).
- Other care plans (non-GLP) follow the same steps but do not include GLP medicine prescriptions.
- All other products (nutraceuticals, diagnostics) are the same.

--- SECTION: GOODFLIP CARE PLANS — INSIDE SALES (IS) TEAM PRICING ---
Plan Type: Comprehensive. Pricing at MRP / 10% Discount / 15% Discount / 20% Discount.
All plans include: Diet Services, Physio Services, Wellness, BCA Device. CGM is Optional unless stated.

LIFESTYLE CONDITION:
- 3 Months: MRP ₹9,999 | 10%: ₹8,999 | 15%: ₹8,499 | 20%: ₹7,999 | Diagnostics: 1 Time | Doctor: Internal Medicine/MD
  Tests: Glucose Fasting, HOMA-IR, Liver Profile, Lipid Profile, TFTs, Apolipoprotein B, CBC/ESR
- 6 Months: MRP ₹13,999 | 10%: ₹12,599 | 15%: ₹11,899 | 20%: ₹11,199 | Diagnostics: 2 Times
  Tests: Round 1 same as above + Round 2: CBC/ESR, TFT, LFT, HBA1c, KFT
- 12 Months: MRP ₹19,999 | 10%: ₹17,999 | 15%: ₹16,999 | 20%: ₹15,999 | Diagnostics: 3 Times
  Tests: Round 1 + Round 2 + Round 3: CBC/ESR, TFT, LFT, HBA1c, KFT

FATTY LIVER CONDITION:
- 3 Months: MRP ₹9,999 | 10%: ₹8,999 | 15%: ₹8,499 | 20%: ₹7,999 | Diagnostics: 1 Time | Doctor: Gastroenterologist
  Tests: LFT, HbA1c, Lipid Profile, Apolipoprotein B, CBC/ESR, RFT, Vitamin D
- 6 Months: MRP ₹13,999 | 10%: ₹12,599 | 15%: ₹11,899 | 20%: ₹11,199 | Diagnostics: 2 Times
  Tests: Round 1 same as above + Round 2: CBC/ESR, Lipid, LFT, HBA1c, KFT
- 12 Months: MRP ₹19,999 | 10%: ₹17,999 | 15%: ₹16,999 | 20%: ₹15,999 | Diagnostics: 3 Times
  Tests: Round 1 + Round 2 + Round 3: CBC/ESR, Lipid, LFT, HBA1c, KFT

DIABETES CONDITION:
- 3 Months: MRP ₹9,999 | 10%: ₹8,999 | 15%: ₹8,499 | 20%: ₹7,999 | Diagnostics: 1 Time | Doctor: Endocrinologist
  Tests: Glucose Fasting, HOMA-IR, HbA1c, Liver Profile, Lipid Profile, Kidney Profile, Apolipoprotein B
- 6 Months: MRP ₹13,999 | 10%: ₹12,599 | 15%: ₹11,899 | 20%: ₹11,199 | Diagnostics: 2 Times
  Tests: Round 1 same as above + Round 2: HBA1c, Lipid, LFT, FBS, KFT
- 12 Months: MRP ₹19,999 | 10%: ₹17,999 | 15%: ₹16,999 | 20%: ₹15,999 | Diagnostics: 3 Times
  Tests: Round 1 + Round 2 + Round 3: HBA1c, Lipid, LFT, FBS, KFT

PCOS CONDITION:
- 3 Months: MRP ₹11,499 | 10%: ₹10,349 | 15%: ₹9,774 | 20%: ₹9,199 | Diagnostics: 1 Time | Doctor: Optional
  Tests: HOMA-IR, HbA1c, RFT, Lipid Profile, CBC/ESR, Serum FSH, Serum LH, Prolactin, LH/FSH Ratio, Total Testosterone, DHEA-S, Thyroid Profile
- 6 Months: MRP ₹14,499 | 10%: ₹13,049 | 15%: ₹12,324 | 20%: ₹11,599 | Diagnostics: 2 Times
  Tests: Round 1 same as above + Round 2: CBC/ESR, Lipid, LFT, HBA1c, KFT
- 12 Months: MRP ₹21,499 | 10%: ₹19,349 | 15%: ₹18,274 | 20%: ₹17,199 | Diagnostics: 3 Times
  Tests: Round 1 + Round 2 + Round 3: CBC/ESR, Lipid, LFT, HBA1c, KFT

IS TEAM ADD-ON — Individual BCA Device: MRP ₹1,499 | 10%: ₹1,349 | 15%: ₹1,274 | 20%: ₹1,199

--- SECTION: GOODFLIP CARE PLANS — FIELD SALES TEAM PRICING ---
Plan Types: Doctor-Basic (no CGM included) and Doctor-Essential (CGM optional).
Pricing at MRP / Slashed Price / Floor Price.
All plans include: Diet Services, Physio Services, Wellness, BCA Device, Diagnostics.

LIFESTYLE — Doctor-Basic:
- 3 Months: MRP ₹8,999 | Slashed ₹5,499 | Floor ₹4,999 | CGM: No
- 6 Months: MRP ₹11,999 | Slashed ₹7,499 | Floor ₹6,999 | CGM: No
- 12 Months: MRP ₹14,999 | Slashed ₹9,999 | Floor ₹8,999 | CGM: No
Tests: Glucose Fasting, HOMA-IR, Liver Profile, Lipid Profile, TFTs, Apolipoprotein B, CBC/ESR (+ repeat rounds for 6/12 months)

LIFESTYLE — Doctor-Essential:
- 3 Months: MRP ₹8,999 | Slashed ₹5,499 | Floor ₹4,999 | CGM: Optional
- 6 Months: MRP ₹11,999 | Slashed ₹7,499 | Floor ₹6,999 | CGM: Optional
- 12 Months: MRP ₹14,999 | Slashed ₹9,999 | Floor ₹8,999 | CGM: Optional
Tests: Same as Doctor-Basic Lifestyle

FATTY LIVER — Doctor-Basic:
- 3 Months: MRP ₹8,999 | Slashed ₹5,499 | Floor ₹4,999 | CGM: No
- 6 Months: MRP ₹11,999 | Slashed ₹7,499 | Floor ₹6,999 | CGM: No
- 12 Months: MRP ₹14,999 | Slashed ₹9,999 | Floor ₹8,999 | CGM: No
Tests: LFT, HbA1c, Lipid Profile, Apolipoprotein B, CBC/ESR, RFT, Vitamin D (+ repeat rounds)

FATTY LIVER — Doctor-Essential:
- 3 Months: MRP ₹8,999 | Slashed ₹5,499 | Floor ₹4,999 | CGM: Optional
- 6 Months: MRP ₹11,999 | Slashed ₹7,499 | Floor ₹6,999 | CGM: Optional
- 12 Months: MRP ₹14,999 | Slashed ₹9,999 | Floor ₹8,999 | CGM: Optional

DIABETES — Doctor-Basic:
- 3 Months: MRP ₹8,999 | Slashed ₹5,499 | Floor ₹4,999 | CGM: No
- 6 Months: MRP ₹11,999 | Slashed ₹7,499 | Floor ₹6,999 | CGM: No
- 12 Months: MRP ₹14,999 | Slashed ₹9,999 | Floor ₹8,999 | CGM: No
Tests: Glucose Fasting, HOMA-IR, HbA1c, Liver Profile, Lipid Profile, Kidney Profile, Apolipoprotein B (+ repeat rounds)

DIABETES — Doctor-Essential:
- 3 Months: MRP ₹8,999 | Slashed ₹5,499 | Floor ₹4,999 | CGM: Optional
- 6 Months: MRP ₹11,999 | Slashed ₹7,499 | Floor ₹6,999 | CGM: Optional
- 12 Months: MRP ₹14,999 | Slashed ₹9,999 | Floor ₹8,999 | CGM: Optional

PCOS — Doctor-Essential only:
- 3 Months: MRP ₹11,999 | Slashed ₹7,999 | Floor ₹7,499 | CGM: Optional
- 6 Months: MRP ₹15,999 | Slashed ₹10,499 | Floor ₹9,999 | CGM: Optional
- 12 Months: MRP ₹22,999 | Slashed ₹14,999 | Floor ₹13,999 | CGM: Optional
Tests: HOMA-IR, HbA1c, RFT, Lipid Profile, CBC/ESR, Serum FSH, LH, Prolactin, LH/FSH Ratio, Total Testosterone, DHEA-S, Thyroid Profile (+ repeat rounds)

FIELD TEAM ADD-ONS:
- Individual BCA Device: MRP ₹2,999 | Slashed ₹1,999 | Floor ₹1,199
- CGM (Transmitter + Sensor): MRP ₹7,999 | Slashed ₹5,200 | Floor ₹4,500

--- SECTION: NIVA BUPA CARE PLANS ---
All plans are Comprehensive and visible on app. Include: Nutritionist, Physiotherapist, Psychologist, General Physician (Unlimited), Chat Support (Unlimited), Specialist consultations, Blood Tests, Optional devices.
Additional features for all plans: 24x7 Help Desk, Workout Videos, Wellness/Meditation Content, Educational Webinars, HRA (Health Risk Assessment), Smart Health Report, Discounted Medication & Diagnostics.

DIABETES MANAGEMENT:
- Specialist: Diabetologist | Super-specialist: Ophthalmologist/Podiatrist/Nephrologist
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | 3 Nutritionist + 1 Physio + 1 Psychologist + 1 Specialist | Tests: HbA1c, FBS, Creatinine
- 6 Months: MRP ₹9,999 | Selling ₹4,799 | 6 Nutritionist + 2 Physio + 2 Psychologist + 2 Specialist | Tests: HbA1c, FBS, Creatinine
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | 12 Nutritionist + 4 Physio + 4 Psychologist + 4 Specialist | Tests: HbA1c, FBS, Creatinine (2 times)
Discounted Devices: Smart Scale MRP ₹1,999/Slashed ₹1,000/Last ₹999 | CGM MRP ₹5,200/Slashed ₹4,500/Last ₹3,950

HYPERTENSION/CHOLESTEROL MANAGEMENT:
- Specialist: Cardiologist | Super-specialist: Endocrinologist/Nephrologist
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | Tests: Lipid Profile, Electrolyte Panel
- 6 Months: MRP ₹9,999 | Selling ₹4,799 | Tests: Lipid Profile, Electrolyte Panel
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | Tests: Lipid Profile, Electrolyte Panel (2 times)

ASTHMA MANAGEMENT:
- Specialist: Pulmonologist | Super-specialist: Allergist
- 3 Months: MRP ₹5,599 | Selling ₹2,799 | Tests: Spirometry, Chest X-ray
- 6 Months: MRP ₹11,199 | Selling ₹4,599 | Tests: Spirometry, Chest X-ray
- 12 Months: MRP ₹22,399 | Selling ₹7,999 | Tests: Spirometry, Chest X-ray (2 times)

PCOS:
- Specialist: Gynecologist | Super-specialist: Endocrinologist/Dermatologist
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | Tests: Hormonal Profile (LH, FSH, Prolactin), TSH
- 6 Months: MRP ₹9,999 | Selling ₹4,799 | Tests: Same
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | Tests: Same (2 times)

WEIGHT LOSS:
- Specialist: Endocrinologist | Super-specialist: As per requirement
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | Tests: TSH, Lipid Profile, FBS
- 6 Months: MRP ₹9,999 | Selling ₹4,799 | Tests: Same
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | Tests: Same (2 times)

THYROID CONTROL PROGRAM:
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | Tests: T3, T4, TSH, Lipid Profile
- 6 Months: MRP ₹9,999 | Selling ₹4,699 | Tests: Same
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | Tests: Same (2 times)

LIVER MANAGEMENT PROGRAM:
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | Tests: Lipid Profile, LFT
- 6 Months: MRP ₹9,999 | Selling ₹4,699 | Tests: Same
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | Tests: Same (2 times)

KIDNEY MANAGEMENT PROGRAM (CKD):
- 3 Months: MRP ₹4,999 | Selling ₹2,999 | Tests: KFT, RUA, eGFR, Albuminuria, Creatinine
- 6 Months: MRP ₹9,999 | Selling ₹4,699 | Tests: Same
- 12 Months: MRP ₹19,999 | Selling ₹7,499 | Tests: Same (2 times)

--- SECTION: NIVA BUPA OPS SOP — PATIENT PROCESS FLOWS ---
SOP for handling Niva Bupa patients across Health Partner/RM, Nutrition, Physio, and Mental Wellness workflows.

HEALTH PARTNER / RM PROCESS (HAPPY FLOW):
1. Patient enrolls in the Care Plan.
2. Health Partner attempts Welcome Call within 2 business hours.
3. If patient picks up: Greet and explain the program to start the journey → Health Partner assists patient to book Diagnostics if needed → Take appointments for Health Coaches → Health Partner connects weekly with patients to ensure smooth experience and improve adherence.
4. If patient does not pick up: Call back with maximum 5 attempts with a gap of 3 hours between two calls. If still no response: patient is marked Inactive and handed over to support team for further intervention.
5. Ongoing support and guidance provided via WhatsApp chat throughout the journey.

NUTRITION COACH PROCESS:
1. Appointment booked with Nutrition Coach.
2. Nutrition Coach calls patient for consultation (3 attempts in 3 days).
3. First consultation: Introduction, Health Assessment, Diet habits and current lifestyle understanding.
4. Nutrition Coach prepares the diet plan based on provided details.
5. Diet plan shared within 24–48 business hours.
6. Diet plan explanation message or call from Coach in next 2–3 days of plan share.
7. Patient follows the diet plan for next 30 days. Weekly educational and diet-related messages shared.
8. 2nd Consultation booked → Coach calls as per appointment (3 attempts in 3 days) → revised plan shared based on 2nd consultation details.
9. Cycle repeats every month based on plan duration. Ongoing support via in-app chat.

PHYSIO COACH PROCESS:
1. Appointment booked with Physio Coach.
2. Physio Coach connects with patient via video call for consultation (3 attempts in 3 days).
3. First consultation: Health History, Physical Examination, Strength Analysis.
4. Physio Coach prepares the exercise plan based on provided details.
5. Exercise plan shared within 24–48 business hours.
6. Physio plan follow-up message or call from Coach in next 2–3 days of plan share.
7. Patient follows the physio plan for next 3 months. Weekly educational and exercise-related messages shared.
8. 2nd Consultation booked → video consultation (3 attempts in 3 days) → revised physio plan shared.
9. Cycle repeats every 3 months based on plan duration. Ongoing support via in-app chat.

MENTAL WELLNESS COACH PROCESS:
1. Appointment booked with Mental Wellness Coach.
2. Coach connects with patient via video call for consultation (3 attempts in 3 days).
3. Thorough assessment by Mental Wellness Coach to understand patient's condition.
4. Wellness plan prepared based on provided details.
5. Wellness plan shared within 24–48 business hours.
6. Patient follows the wellness plan for next 30 days. Weekly educational messages shared.
7. 2nd Consultation booked → video consultation (3 attempts in 3 days) → revised wellness plan shared.
8. Cycle repeats every month up to defined time period. Ongoing support via in-app chat.

UNHAPPY FLOW (INACTIVE PATIENTS):
Case 1 — Patient did not pick up/respond to any RM calls (post 5 attempts):
- Patient marked as Inactive → Support team calls to activate the patient (3 attempts in next 7 business days) → If still no pick up: reported to Niva Team.
Case 2 — Patient did not respond to Health Coach calls (post 3 attempts):
- Health Coaches mark patient as Inactive → Support team tries to connect and reschedule the appointment with Health Coach (3 attempts in next 7 business days) → If still no pick up: reported to Niva Team.

KEY NIVA BUPA SOP TATs:
- Welcome call: within 2 business hours of enrollment
- RM callback attempts: max 5, with 3-hour gaps
- Coach consultation attempts: 3 attempts in 3 days
- Plan sharing (diet/exercise/wellness): within 24–48 business hours
- Plan explanation follow-up: 2–3 days after plan share
- Support team activation attempts: 3 attempts in 7 business days

--- SECTION: MYSAATHI CARE PLAN (SEMAGLUTIDE PROGRAM) ---
MySaathi is the operational program for Semaglutide (weight loss injection) patients. Drug brands covered: Semaglyn, Alterme, Mashema (all Zydus Semaglutide Injection 15 mg/3 mL, subcutaneous use).

OPERATIONAL FLOW (Doctor QR scan to first coach call):
1. Lead Capture: Doctor QR Scan → Landing Page Registration → App Download
2. Validation: Invoice Upload → Ops Verification
   - If invoice is rejected: user enters 'Validation Pending' queue for manual outreach
3. Activation: Plan Assignment → Coach Assignment (Round-Robin)
4. Logistics: Welcome Kit Dispatch (BCA, Info Manual, Protein)
5. App Engagement: Food Logging, PPG Scan, and Kaira Assistant
6. Retention: Fortnightly 'Sema Care Navigator' calls for inactive users
7. Customer Support: Existing GoodFlip customer team handles support

RESPONSIBILITIES:
Surbhi, Aditya Anand and Vijaya are responsible for: Invoice verification, plan assignment, coach assignment, Welcome kit dispatch, Program adherence.

PROGRAM DURATION: Each patient stays in the system for exactly 4 months. Active Load = current month's new sign-ups + previous three months' cohorts.

COACHING SESSIONS:
- Months 1–2: 4 sessions total per month (2 Diet + 2 Physio per month)
- Months 3–4: 2 sessions total per month (1 Diet + 1 Physio per month)

COACHES FLOW RULES:
1. No proactive calls done to the user
2. Coach will only join the session during the slot time
3. Coaches will make 2 calls within the slot if the patient does not join the session
4. No follow-up explanatory call

KEY KPIs:
- Verification TAT: Target under 2 hours from invoice upload to plan assignment
- Care Navigator Efficacy: % of 'Inactive' users moved back to 'Active' after the fortnightly call

OPERATION TEAM AVAILABILITY:
- Monday to Saturday: 8 AM – 7 PM
- Sunday and Holidays: 8 AM – 4 PM (operational from 10th April)

WELCOME KIT COMBOS:
1. MySaathi Tool Kit = BCA + Welcome Card + Lifestyle Companion Card + Weight Loss Card + GRD + Youthbless
   Note: Till May end, GRD & Youthbless cream not available (supplied by Zydus for fulfillment) — make SKU accordingly.
2. MySaathi Tool Kit Follow-up Box = Follow-up Card + GRD + Youthbless cream
   Note: Follow-up box for sending GRD + Youthbless cream once received from Zydus.

WELCOME KIT TRACKING:
Patient welcome kit details can be checked on the MySaathi dashboard by searching the patient name in the search box of the 2nd module: https://mysaathi-dashboard.vercel.app/ (login credentials available with the ops team — Kirti Gautam).

PROTEIN SAMPLE: GRD Slim (Zydus) — Meal replacement for weight control. Chocolate flavour, 60g pack. High protein (24.66g), Rich fiber (13.26g), 26 essential vitamins & minerals, probiotic boost, zero added sugar. Recommended usage: 60g powder daily (pour 250ml water in shaker, add 60g powder, shake thoroughly).
`;

// ============ RAG-LITE: SECTION RETRIEVAL ============
// Splits the knowledge base into sections and picks only the most
// relevant ones for each question — smaller prompt = faster answers.

const SECTIONS = KNOWLEDGE_BASE.split(/(?=--- SECTION:)/g)
  .map(s => s.trim())
  .filter(s => s.startsWith("--- SECTION:"))
  .map(s => {
    const titleMatch = s.match(/--- SECTION:\s*(.+?)\s*---/);
    return { title: titleMatch ? titleMatch[1] : "", text: s };
  });

const STOPWORDS = new Set(["the","a","an","is","are","was","were","what","which","who","whom","how","why","when","where","do","does","did","can","could","will","would","shall","should","in","on","at","for","of","to","and","or","if","it","its","my","our","your","their","this","that","these","those","with","from","by","about","as","be","been","being","i","we","you","they","he","she","me","us","them","have","has","had","not","no","yes","please","tell","give","me","list","show","explain"]);

// Domain synonyms — maps question words to words that appear in sections
const SYNONYMS = {
  price: ["mrp", "pricing", "cost", "₹", "discount", "slashed", "floor", "selling"],
  pricing: ["mrp", "price", "cost", "₹", "discount", "slashed", "floor", "selling"],
  cost: ["mrp", "price", "pricing", "₹"],
  replace: ["replacement"],
  replacement: ["replace", "policy", "10 day", "workflow"],
  error: ["errors", "troubleshooting", "fix"],
  install: ["installation", "placement"],
  installation: ["install", "placement", "app"],
  sensor: ["cgm", "transmitter"],
  transmitter: ["cgm", "sensor", "charging"],
  coach: ["assignment", "plan"],
  doctor: ["dr", "consultation", "specialist"],
  dr: ["doctor", "consultation", "booking"],
  drug: ["dispatch", "prescription", "glp"],
  weight: ["weightloss", "glp", "obesity"],
  sugar: ["glucose", "reading", "bgm", "cgm"],
  glucose: ["sugar", "reading", "cgm", "bgm"],
  reading: ["bgm", "cgm", "glucose", "difference"],
  field: ["field sales"],
  is: ["inside sales"],
  niva: ["bupa"],
  bupa: ["niva"],
  goodflip: ["gf", "care plans"],
  mysaathi: ["saathi", "semaglutide", "sema"],
  semaglutide: ["mysaathi", "sema", "semaglyn", "alterme", "mashema"],
  sema: ["mysaathi", "semaglutide", "navigator"],
  kit: ["welcome", "combo", "dispatch"],
  welcome: ["kit", "combo", "dispatch"],
  invoice: ["verification", "validation", "upload"],
  navigator: ["sema", "retention", "inactive"],
  sla: ["support", "hours", "tat", "escalation"],
  hours: ["sla", "support", "operating"],
  test: ["tests", "diagnostics", "included"],
  tests: ["test", "diagnostics", "included"],
};

function scoreSection(section, questionWords) {
  const textLower = section.text.toLowerCase();
  const titleLower = section.title.toLowerCase();
  let score = 0;
  for (const word of questionWords) {
    // Title matches weigh heavily
    if (titleLower.includes(word)) score += 10;
    // Count occurrences in body (capped to avoid one word dominating)
    const count = (textLower.match(new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
    score += Math.min(count, 5);
    // Synonym boost
    const syns = SYNONYMS[word];
    if (syns) {
      for (const syn of syns) {
        if (titleLower.includes(syn)) score += 5;
        if (textLower.includes(syn)) score += 1;
      }
    }
  }
  return score;
}

function retrieveRelevantSections(question, topN = 3) {
  const questionWords = question
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOPWORDS.has(w));

  const scored = SECTIONS.map(s => ({ ...s, score: scoreSection(s, questionWords) }))
    .sort((a, b) => b.score - a.score);

  // If nothing matched at all, fall back to full knowledge base
  if (!scored.length || scored[0].score === 0) {
    return KNOWLEDGE_BASE;
  }

  return scored.slice(0, topN).map(s => s.text).join("\n\n");
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // ---- Shared password check ----
  const teamPassword = process.env.TEAM_PASSWORD;
  const providedPassword = req.headers["x-team-password"] || "";
  if (teamPassword && providedPassword !== teamPassword) {
    return res.status(401).json({ error: "unauthorized" });
  }

  // Login verification request — just confirms the password is correct
  if (req.body && req.body.verify === true) {
    return res.status(200).json({ ok: true });
  }

  const { question } = req.body;
  if (!question || !question.trim()) return res.status(400).json({ error: "Question is required" });

  try {
    const relevantContext = retrieveRelevantSections(question, 3);

    const response = await fetch("https://api.cohere.com/v2/chat", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command-r7b-12-2024",
        messages: [
          {
            role: "system",
            content: `You are a helpful internal assistant for Tatvacare's operations team. Answer questions clearly and accurately based ONLY on the knowledge base excerpts below.

Rules:
- Answer ONLY from the knowledge base excerpts. Do not make up information.
- If the answer is not in the excerpts, respond with: "I don't have information on that. Please check with your team lead or operations manager."
- Keep answers concise, clear, and actionable.
- Use numbered steps when explaining a process.
- Highlight important warnings or critical rules clearly.
- Do not greet or add unnecessary filler text. Just answer.

KNOWLEDGE BASE EXCERPTS:
${relevantContext}`
          },
          {
            role: "user",
            content: question
          }
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      throw new Error(`Cohere API error ${response.status}: ${errBody}`);
    }

    const data = await response.json();
    const answer = data.message.content.map(c => c.text).join("");
    res.status(200).json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong. Please try again." });
  }
};
