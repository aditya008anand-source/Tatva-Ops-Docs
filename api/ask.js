const { GoogleGenerativeAI } = require("@google/generative-ai");

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
`;

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { question } = req.body;
  if (!question || !question.trim()) return res.status(400).json({ error: "Question is required" });

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are a helpful internal assistant for Tatvacare's operations team. Your job is to answer questions clearly and accurately based ONLY on the knowledge base provided below.

Rules:
- Answer ONLY from the knowledge base. Do not make up information.
- If the answer is not in the knowledge base, respond with: "I don't have information on that. Please check with your team lead or operations manager."
- Keep answers concise, clear, and actionable.
- Use numbered steps when explaining a process.
- Highlight important warnings or critical rules clearly.
- Do not greet or add unnecessary filler text. Just answer.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}

Question: ${question}

Answer:`;

    const result = await model.generateContent(prompt);
    const answer = result.response.text();
    res.status(200).json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong. Please try again." });
  }
};
