# ANYTIME HELP — LEGAL PACKAGE FOR RESIDENT ONBOARDING

**Prepared for:** Neeraj Yadav
**Date:** 30 August 2026
**Status:** DRAFT FOR INDIAN LEGAL COUNSEL REVIEW — NOT FOR PRODUCTION USE

> **Reader's note.** This is a drafting and risk-analysis work product, not legal advice, and I am not your advocate. Statutory references are described as accurately as I can, but the Digital Personal Data Protection Act, 2023 was being implemented in phases through 2025–2027 and the position may have moved since. Every statutory reference, every timeline and every placeholder in this package must be verified by an Indian advocate before you publish it. Part F lists the specific questions to put to them.

---

# PART A — LEGAL AND PRACTICAL RISK ANALYSIS

Before the drafting, here is what actually goes wrong with a residential complaint platform, and how the document should respond. The order follows your brief.

## A.0 The threshold problem that determines everything else

Almost every question below has the same root: **who, in law, is the person responsible for the residents' data and for the service — the company, or the RWA?** Until that is settled, the Terms cannot be finalised, because it changes who gives the privacy notice, who answers rights requests, who reports a breach, who the resident's contract is with, and who is sued.

There are three viable models:

| Model | Company's role | RWA's role | Consequence |
|---|---|---|---|
| **1. Platform-led** | Data Fiduciary; contracts directly with residents | Customer/administrator user | Company carries the DPDP notice, consent, rights, grievance and breach obligations |
| **2. SaaS / RWA-led** | Data Processor acting only on the RWA's documented instructions | Data Fiduciary | RWA must issue the notice and answer rights requests; company needs a processing agreement and must not use data for its own purposes (**this model is incompatible with selling advertising against resident data**) |
| **3. Independent fiduciaries** | Fiduciary for account, security and platform-improvement purposes | Fiduciary for community administration and complaint outcomes | Both must give notice; allocate responsibility contractually and disclose the split to residents |

Under the DPDP Act, a Data Fiduciary is the person who **alone or with others determines the purpose and means** of processing. A processor processes **on behalf of** a fiduciary. You cannot choose your label; the facts choose it. Two facts in your stated concept push hard towards Model 1 or 3 and away from Model 2:

- You intend to **hold data on all RWA members** as a platform, and
- You intend to **run paid advertising**, with advertiser revenue routed to maintenance charges and RWA funds.

Deciding to monetise the user base through advertising is, in substance, determining a purpose of your own. A pure processor cannot do that. Flagged again in Part F.

> **Additional advertising issue you did not raise but should:** if ads are ever selected using resident data (flat, block, complaint history, in-app behaviour), that is a *separate* purpose requiring its own notice and its own consent, and it must be refusable without losing access to the complaint function. If ads are purely contextual — the same banner to everyone, no profiling — the exposure is far smaller. I have drafted Clause 9.4 and 10 so that either model can be switched on, but the safe launch position is **contextual ads only, no profiling, no ad targeting to anyone under 18**.

## A.1 Third-party complaint sharing — the clause you most care about

**The risk.** "The company is not responsible for any misuse of data by any agency" fails for four independent reasons, and each failure is enough on its own:

1. **It is contradicted by statute.** Under the DPDP Act, a Data Fiduciary remains responsible for compliance in respect of personal data processed **on its behalf** by a Data Processor, *notwithstanding any agreement to the contrary*. If your plumbing vendor or ticketing agency processes complaint data on your instructions, no contract term can transfer that responsibility away. A clause that purports to do so is void as to that class of recipient.
2. **It is unenforceable as an unfair term.** The Consumer Protection Act, 2019 defines "unfair contract" and empowers the consumer commissions to declare such terms null and void. Indian courts have also long held that in a standard-form contract between parties of unequal bargaining power, an unreasonable or unconscionable term can be struck down (the *LIC of India v. Consumer Education & Research Centre* and *Central Inland Water Transport v. Brojo Nath Ganguly* line of authority). A blanket, undifferentiated waiver is exactly the shape of term that gets struck.
3. **It poisons your consent.** DPDP consent must be free, specific, informed and unconditional. Making access to the complaint function conditional on a resident waiving all recourse for data misuse is a strong argument that the consent was not freely given — which means you lose the lawful basis for the whole processing operation, not just the clause.
4. **It is severability roulette.** A single over-broad clause invites a court to read down or strike the whole liability architecture. A narrower clause that survives protects you far more than a wide one that does not.

**The reformulation.** Split recipients into two classes and disclaim only what is actually disclaimable:

- **Service Partners** — anyone processing complaint data *on behalf of* the platform or the RWA under instructions (ticketing vendors, hosting, SMS gateways, a facility-management contractor working to the RWA's brief). Here you **accept** responsibility to the extent the law imposes it, and manage the risk with contracts, security obligations, breach-notification duties, access limits and audit rights — not with a disclaimer.
- **Independent Recipients** — anyone who receives complaint information and then decides for themselves what to do with it: the police, a municipal or state authority, a discom or water utility, an insurer, a court, and any agency the RWA engages directly on its own account. These are separate responsible persons in their own right.

Then the operative sentence is: *after a lawful, proportionate, need-to-know disclosure to an Independent Recipient, the platform is not responsible for that recipient's own subsequent acts or omissions* — expressly preserving liability for (a) the decision to disclose, (b) disclosing more than was necessary, (c) negligence in selecting or instructing a recipient the platform chose, (d) statutory responsibility for processors, and (e) anything not excludable by law. That is Clause 9.6 and Clause 14.5 of Part C.

Two supporting mechanics matter as much as the wording: **disclose the sharing in the notice before the complaint is filed**, and **log every disclosure**. A clause backed by a disclosure log is defensible; the same clause with no record of what was shared is not.

## A.2 Privacy and data protection

**The risks.** Bundled consent; a notice that is not itemised; treating consent as the only lawful basis; over-collection (the classic RWA reflex of asking for Aadhaar and vehicle and staff details "for records"); no mechanism for the rights the Act confers; and photographs, which are the highest-risk data class on a complaint platform because residents photograph other people's doors, cars, domestic workers, children and waste without thinking.

**How the Terms handle it.**

- A **standalone, itemised notice** presented before or with the consent request, in plain language, with translations available. The Act contemplates notice being available in English and the languages in the Eighth Schedule; for Sushant Lok, Hindi is the practical minimum alongside English.
- **Consent is not the only basis.** Where a resident voluntarily submits a complaint for a specified purpose and has not objected, the Act's "certain legitimate uses" limb can support processing that complaint for resolution. Security logs, fraud prevention and legal-compliance retention also sit awkwardly under consent, because a person can withdraw consent and you still need the logs. The document should say honestly which basis applies to which activity rather than pretending everything is consent.
- **Granular, unbundled consent** for anything optional (marketing, advertising personalisation, non-essential analytics), separated from acceptance of the Terms.
- **Hard prohibitions on collection**: no Aadhaar number, no financial account or card numbers, no biometric data, no caste or religion fields, and no health information — collect none of it, and instruct residents not to submit it in complaint text. Aadhaar in particular: after the Supreme Court struck down section 57 of the Aadhaar Act, a private platform has no authority to require or store Aadhaar numbers. An RWA app collecting Aadhaar copies of residents or domestic staff is a live enforcement risk, not a theoretical one.
- **Photo/video guardrails**: a pre-upload prompt telling residents to photograph the *problem*, not the *person*; a right for the platform to redact or reject images; and no facial recognition.
- **Rights**: access, correction, erasure, nomination and grievance, with a stated response window and a named grievance officer.

## A.3 RWA versus platform responsibilities

**The risk.** Residents will not distinguish between the app and the society. If the lift stays broken for three weeks, the complaint will be "the app did nothing". Conversely, if the RWA committee misuses the platform — publishing a defaulters list with names and flat numbers, or disclosing a complainant's identity to the person complained about — residents will sue whoever they can name, and the platform is the visible, incorporated, insurable defendant.

**How the Terms handle it.** A dedicated clause stating that the platform routes and records requests but does not itself perform maintenance, security, housekeeping, plumbing or electrical work; that the underlying service is delivered by the RWA, its employees, contractors or vendors; that submitting a complaint does not create an obligation on anyone to perform a particular service; and that the RWA's own bylaws, charges and procedures continue to apply and prevail on community matters. Add a governance point the Terms cannot fix on their own: **the RWA's administrators need a written acceptable-use undertaking of their own**, because most real-world privacy incidents on society apps come from an over-enthusiastic committee member, not from a hacker.

## A.4 Employee, founder and director liability

**The risks.** Three distinct traps.

- **Privity.** India applies the doctrine of privity of contract fairly strictly. A clause in a contract between the resident and the company that purports to protect employees and founders is not, without more, enforceable *by those individuals*, because they are not parties. It must be structured as a **covenant by the resident not to sue** those individuals, given to the company, with the company expressly holding that benefit on their behalf — plus an internal indemnity from the company to the individuals.
- **Non-excludable personal liability.** Criminal liability cannot be contracted out of at all. Officers face personal exposure under, among others, section 72A of the IT Act (disclosure of information in breach of a lawful contract), the officer-in-default provisions of the Companies Act, 2013, and the deemed-liability provisions that many Indian statutes attach to persons in charge of a company's business.
- **Over-claiming.** A clause saying founders have "no liability under any circumstances" is both unenforceable and evidence of bad faith in any subsequent dispute.

**How the Terms handle it.** Protect individuals **for acts done in good faith within the scope of their authorised role**, exclude fraud, dishonesty, wilful misconduct and gross negligence from that protection, state that criminal and non-excludable statutory liability is untouched, and back it commercially with directors' and officers' insurance rather than drafting.

## A.5 Defamation and false complaints

**The risks.** A complaint saying "the guard on B-block night shift is stealing" is capable of being defamatory of an identified individual. If it is visible to committee members or other residents, it has been *published*. The complainant is primarily liable; the platform is exposed as the publisher/host, and the RWA as the recipient who acted on it. Beyond defamation, false complaints against staff carry real consequences for people with little power to answer back — domestic workers, guards, housekeeping staff — and complaints motivated by caste or community can attract liability well beyond civil defamation.

**How the Terms handle it.**

- An express truthfulness obligation, reinforced by the fact that the **DPDP Act itself imposes a duty on individuals not to register a false or frivolous grievance**, with a monetary penalty attached (the Schedule specifies up to ₹10,000 for breach of a Data Principal's duties — confirm the current figure).
- A prohibition on using the complaint channel to harass any resident, employee, guard, domestic worker, vendor or staff member.
- **Architectural mitigation, which matters more than the clause**: complaints should be **private by default** — visible to the complainant, the assigned handler and authorised administrators, never a public feed. This is the single highest-value design decision in the product for legal risk. If you later add a public "community wall", it needs its own moderation policy and it changes the analysis.
- A stated right to redact, restrict, reject, merge, close or escalate; a notice-and-action route for a person named in a complaint; and retention of the complaint record as evidence.
- A **resident indemnity** limited to claims arising from that resident's own unlawful or knowingly false submissions — narrow enough to be fair, broad enough to be useful.
- **Safe-harbour tension to flag:** heavy editorial moderation can weaken an argument that the platform is a passive intermediary, while no moderation increases defamation exposure. Counsel should decide where you sit, and whether you should voluntarily adopt the Part II due-diligence practices under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — publishing rules of use, appointing a grievance officer, acknowledging complaints within 24 hours and disposing of them within 15 days. Those are sensible operational practices whether or not the safe harbour is available to you.

## A.6 Third-party vendors and agencies

**The risk.** The weakest link is a housekeeping supervisor with a WhatsApp forward of a complaint screenshot showing a resident's name, flat number and photograph of their front door. No disclaimer helps you if you had no contract and no access controls.

**How the Terms handle it (and what sits outside the Terms).** The resident-facing document states the categories of recipient, the need-to-know limit and the contractual safeguards. The real work is in the back-to-back agreements: written processing terms, purpose limitation, confidentiality, security obligations, a duty to notify you of incidents, no onward disclosure without authorisation, deletion or return on termination, and named-individual access rather than shared logins. Where a vendor is engaged **by the RWA directly**, make it explicit in the platform–RWA agreement that the RWA is responsible for imposing equivalent terms; otherwise you inherit its failures by default.

## A.7 Limitation of liability

**The risks.** An unlimited exclusion is likely to be read down. A liability cap tied to "fees paid by the resident" is worth nothing where the resident pays nothing, and a cap of zero looks unconscionable. Excluding liability for death or personal injury caused by negligence, for fraud, or for statutory obligations is not effective in India.

**How the Terms handle it.** A tiered structure: exclude indirect and consequential loss; cap direct liability at the **higher** of amounts actually paid by or for that resident in the preceding twelve months and a stated rupee floor (so the cap is never nil); and carve out, expressly, death or personal injury caused by negligence, fraud or fraudulent misrepresentation, wilful misconduct, gross negligence, and anything not excludable under Indian law. Separate the tiers for company, RWA, individuals and independent third parties, as you asked. Do not attempt to shorten the limitation period — a term restricting the time within which a party may enforce its rights runs into section 28 of the Indian Contract Act, 1872.

## A.8 Electronic consent and acceptance

**The risks.** A pre-ticked box is not a clear affirmative action and is not valid DPDP consent. A "by using the app you agree" banner (browsewrap) is weak evidence. And if you cannot later prove *what version* the resident saw, your enforceable terms are whatever they can plausibly claim to have seen.

**How the Terms handle it.** Contracts formed electronically are valid in India (section 10A of the Information Technology Act, 2000). The requirement is evidential: an unticked checkbox, an affirmative tap, the notice shown before acceptance, and a stored record. Store the user ID, terms and notice version identifiers, UTC timestamp, the exact rendered text or a content hash of it, the consent items toggled, and — where proportionate — IP and device identifiers. Preserve this in a form that can support a certificate for electronic records under section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced section 65B of the Evidence Act from 1 July 2024); a log that cannot be certified is a log you cannot use.

## A.9 Children and minors

**The risks.** Two separate ones, and people usually spot only the first.

- **Contract:** an agreement with a minor is void *ab initio* in India (*Mohori Bibee v. Dharmodas Ghose*). A 16-year-old cannot bind themselves to your Terms.
- **Data protection:** the DPDP Act requires verifiable parental consent before processing a child's personal data, prohibits tracking, behavioural monitoring and targeted advertising directed at children, and prohibits processing likely to cause a detrimental effect on a child's wellbeing. **Your advertising model collides with this directly.**

**How the Terms handle it.** Restrict accounts to persons aged 18 and above; require a parent or guardian to hold the account for a household; state that the platform does not knowingly create accounts for minors and will close any it discovers; and instruct residents not to upload images of other people's children. Note separately that complaint content can incidentally contain a child's personal data even when the account holder is an adult — that needs a handling rule, not just a clause.

## A.10 Emergency use

**The risk.** This is the one that produces a catastrophic rather than expensive claim. A resident with a gas leak or a medical emergency at 2 a.m. taps "Anytime Help" because the name promises exactly that, waits, and is harmed. A disclaimer buried at clause 34 will not carry the day if the product's design invited reliance. The name of your app increases this risk rather than reducing it.

**How the Terms handle it, and how the product must.** A standalone, prominently formatted clause near the front of the document, not in the boilerplate; the same warning repeated **at the point of complaint submission**, not only at onboarding; a permanent, one-tap list of emergency numbers (112 nationally; 100 police, 101 fire, 102/108 ambulance) that does not require the resident to read anything; and no wording anywhere in the app, in marketing or in the name treatment that implies monitoring, guarding, response times or 24×7 rescue. Consider whether "Anytime Help" should be presented with a descriptive tagline that manages the expectation the name sets.

## A.11 Data retention

**The risks.** Keeping everything forever is a DPDP breach and a breach-severity multiplier. Deleting on request without exception destroys your evidence in exactly the disputes where you need it — the false complaint, the harassment allegation, the vendor payment argument.

**How the Terms handle it.** State the *principle* (retain while the purpose is live, then erase) with a schedule to be fixed by counsel, and state the exceptions honestly: legal and regulatory requirements, defence of claims within limitation (three years for most contract and tort claims under the Limitation Act, 1963), audit and accounting, security investigation, and enforcement of these Terms. Two hard anchors to check: the CERT-In directions of 28 April 2022 require certain ICT system logs to be maintained for 180 days within India, and intermediaries under the 2021 Rules are expected to retain registration information for 180 days after account cancellation. **Do not publish specific retention periods until counsel sets them** — I have used placeholders.

## A.12 Security and data breaches

**The risks.** Over-promising ("100% secure", "military-grade", "AWS-certified") converts a security incident into a misrepresentation claim and a consumer-protection complaint. Under-preparing is worse: the DPDP Act attaches a penalty of up to ₹250 crore for failure to take reasonable security safeguards, and requires intimation of a personal data breach to the Board and to each affected individual — with no materiality threshold in the Act itself.

**How the Terms handle it.** Commit to **reasonable technical and organisational safeguards** and describe them at a category level (encryption in transit and at rest, role-based access, MFA for administrators, logging, vendor due diligence, incident response) without publishing a blueprint. Say plainly that no system can be guaranteed secure. Commit to notifying affected residents and the relevant authority as required by law, without inventing a timeline in the resident-facing text — the Rules prescribe the timelines and they have transition dates.

Two operational points that belong in Part E rather than the Terms but are worth stating here:

- **AWS shared responsibility.** AWS secures the underlying infrastructure; *you* are responsible for security groups, IAM, encryption configuration, patching your application, S3 bucket policies and access management. Publicly readable S3 buckets holding complaint photographs are the single most common failure mode for applications shaped like yours. Do not describe AWS's certifications as your own.
- **CERT-In.** The 28 April 2022 directions require reporting of specified cyber incidents to CERT-In within **six hours** of noticing them, alongside the 180-day log-retention and time-synchronisation requirements. Applicability to your entity needs confirmation, but the six-hour clock is not something you want to discover on the day.
---

# PART B — RECOMMENDED DOCUMENT STRUCTURE

A single resident-facing document, with the Privacy & Data Declaration as a clearly separated Part 2 inside it, plus a short standalone privacy notice surfaced at first login. Rationale for that choice is in Part D.4.

**Front matter**
- Title, version, effective date, entity block (placeholders)
- Summary box: "What this document does, in six lines"
- **Emergency notice** — boxed, before anything else
- Acceptance statement (short form)

**Part 1 — Terms of Use**
1. Who these Terms are between; definitions
2. What Anytime Help is, and what it is not
3. Emergency services — full clause
4. Eligibility, accounts and account security
5. Using the complaint and request features
6. Rules of acceptable use
7. Your content and the limited licence you give
8. Relationship with the RWA and service delivery
9. Communications you will receive

**Part 2 — Privacy & Data Declaration**
10. Who is responsible for your personal data
11. What we collect
12. Why we collect it, and our lawful basis
13. Data minimisation and accuracy
14. **Sharing complaint information to get it resolved** (the core clause)
15. Other disclosures
16. Service providers, hosting and cloud infrastructure
17. Storage location and cross-border processing
18. Security
19. Data breaches
20. How long we keep information
21. Your rights and how to use them
22. Children
23. Cookies, analytics and logs

**Part 3 — Legal Terms**
24. Availability and things outside our control
25. Disclaimers
26. Limitation of liability (tiered: company / RWA / individuals / independent third parties)
27. Your responsibility and indemnity
28. Suspension and termination
29. Intellectual property
30. Changes to these Terms and version control
31. Grievance redressal and how to contact us
32. Governing law and disputes (with optional arbitration clause, flagged)
33. General terms
34. Your declaration and acceptance

---
# PART C — FINAL RESIDENT-FACING DOCUMENT

> **Note on length.** This runs to roughly 9,000 words rather than the 3,000–5,000 you targeted. I trimmed it twice, but the brief specified 34 subject areas including a four-tier liability structure and a full privacy declaration, and cutting further meant dropping clauses you asked for rather than removing padding. If you want a shorter resident-facing version, the right approach is to split it as recommended in Part D.5 — a ~1,200-word plain-language Terms document plus a separate ~2,000-word Privacy Declaration, with the detailed liability and IP provisions in a linked annexe — rather than to compress this one. Say the word and I will produce that split.

---

# ANYTIME HELP — RESIDENT TERMS & CONDITIONS, PRIVACY & DATA DECLARATION

**Version:** [VERSION NUMBER, e.g. 1.0]
**Effective from:** [EFFECTIVE DATE]
**Applies to:** Residents and authorised occupants of the societies, campuses and facilities that use Anytime Help
**Operated by:** Anytime Help, [entity type, e.g. a private limited company incorporated under the Companies Act, 2013], CIN [CIN], registered office at [REGISTERED OFFICE ADDRESS] ("**we**", "**us**", "**Anytime Help**")
**In association with:** the resident welfare association, management committee or facility administrator that runs Anytime Help for your society, campus or facility (the "**RWA**")
**Contact:** support@anytimehelp.com | **Grievance Officer:** [GRIEVANCE OFFICER NAME], [GRIEVANCE ADDRESS]

---

### In short

Anytime Help is an app for residents of the societies, campuses and facilities that use it. You can read community announcements, raise complaints and service requests, attach photos or documents, and follow what happens next. To get your complaint fixed, we usually have to pass the relevant details to whoever handles that service — a plumber, an electrician, housekeeping, security, the RWA office, or an outside authority. This document explains what we collect, who we share it with, what we are responsible for, and what we are not. Please read it before you tap Accept. The full text below prevails over this summary.

---

> ## ⚠️ 1. THIS IS NOT AN EMERGENCY SERVICE
>
> **Anytime Help is not a police, fire, ambulance, medical, rescue, disaster-response or security-monitoring service, and it is not a substitute for any of them.**
>
> Nobody is guaranteed to be watching the app at any given moment. Complaints are not monitored continuously and there is no guaranteed response time.
>
> **If there is a fire, a gas leak, a medical emergency, a crime in progress, a threat to anyone's safety, a structural collapse, an electrocution risk, a child or vulnerable person at risk, or any other situation needing immediate help — call the emergency services directly, first.**
>
> | Service | Number |
> |---|---|
> | All emergencies | **112** |
> | Police | **100** |
> | Fire | **101** |
> | Ambulance | **102 / 108** |
>
> You may also contact [RWA EMERGENCY CONTACT / SECURITY DESK NUMBER]. Use Anytime Help afterwards to create a record, not instead of calling for help.

---

## PART 1 — TERMS OF USE

### 2. Who these Terms are between, and what the words mean

**2.1** These Terms are an agreement between you (an individual resident or authorised occupant, "**you**") and Anytime Help. Parts of them also set out how the RWA participates in the platform.

**2.2** By ticking the acceptance box and continuing, you enter into a legally binding agreement with us by electronic means. Contracts formed electronically are valid under Indian law, including section 10A of the Information Technology Act, 2000.

**2.3** Definitions used throughout:

- **"Platform"** — the Anytime Help mobile application, any associated website, and the services provided through them.
- **"Complaint"** — any complaint, grievance, maintenance request, service request, report or similar submission you make through the Platform, together with anything you attach to it.
- **"Content"** — anything you submit: text, photographs, videos, audio, documents, comments and messages.
- **"RWA"** — the resident welfare association, management committee or facility administrator responsible for your society, campus or facility, and its authorised office bearers, committee members, administrators and staff acting in that capacity.
- **"Service Partner"** — a person or organisation that processes information **on behalf of** us or the RWA and under instructions, such as a hosting provider, a messaging provider, a ticketing or field-service vendor, or a contractor engaged to carry out work through the Platform.
- **"Independent Recipient"** — a person or organisation that receives information from the Platform and then decides **for itself** how to use it, such as the police, a municipal, state or central authority, a court, an electricity or water utility, an insurer, or an agency engaged directly by the RWA on its own account.
- **"Personal Data"**, **"Data Fiduciary"**, **"Data Processor"** and **"Data Principal"** carry the meanings given to them in the Digital Personal Data Protection Act, 2023 ("**DPDP Act**").

**2.4** These Terms include the Privacy & Data Declaration in Part 2. They do not replace the RWA's own bylaws, house rules, resolutions or charges, which continue to apply to you separately. Where a matter concerns community governance, maintenance dues or occupancy, the RWA's rules govern; where it concerns your use of the Platform, these Terms govern.

### 3. What Anytime Help is, and what it is not

**3.1 What it is.** A communication and record-keeping tool: read announcements and community information, raise and track Complaints, attach supporting material, receive updates, and use other features we may add.

**3.2 What it is not.** **We are not the plumber, the electrician, the guard, the housekeeper, the lift technician or the facility manager.** We do not perform maintenance, repair, security, housekeeping, plumbing, electrical, parking, waste-management or any other physical service. Those are provided by the RWA, its employees, contractors, vendors or independent agencies. Our role is to receive your request, record it, route it to whoever is responsible, and show you what we are told about its progress.

**3.3 No guaranteed outcome.** Submitting a Complaint does not guarantee that any particular service will be provided, within any particular time, in any particular way, or that the RWA or anyone else will act. We do not control whether a vendor turns up, whether the RWA approves expenditure, or whether an authority responds.

**3.4 Information from others.** Announcements, timings and status updates often originate from the RWA, vendors or authorities. We pass them on without independently verifying all of them; they may change or prove inaccurate.

**3.5 Changes to the Platform.** We may add, change, restrict or withdraw features, giving reasonable notice where a change materially reduces functionality you rely on and notice is practicable.

### 4. Eligibility, accounts and account security

**4.1 Age.** You must be **18 years or older** to hold an account. The Platform is not intended for children. If a household member under 18 needs something raised, an adult account holder must raise it.

**4.2 Who may register.** You must be a resident, owner or authorised occupant of a unit in a society, campus or facility that uses Anytime Help, or otherwise authorised by the RWA. We or the RWA may ask for reasonable proof of residence or ownership.

**4.3 One account.** One account per individual, unless we expressly permit otherwise. Each adult occupant of a unit may hold their own account.

**4.4 Your credentials.** Keep your password, OTP and other credentials confidential. Do not share your account or let anyone else use it without our written authorisation. You are responsible for activity through your account, except to the extent it results from our own failure.

**4.5 Tell us quickly.** Notify us at support@anytimehelp.com without delay if you suspect unauthorised access, or if your registered mobile number or email is lost or changes.

**4.6 Accuracy of your details.** Keep your name, unit number and contact details current — complaint routing and legal notices depend on them.

**4.7 Suspension.** We or the RWA may suspend, restrict or close an account where we reasonably believe there has been misuse, fraud, abuse, a security risk, a breach of these Terms or a legal requirement, or where you cease to be a resident or authorised occupant. Except where unlawful, unsafe or impractical, we will tell you why, and you may challenge the decision through clause 31.

### 5. Using the Complaint and request features

**5.1 Be truthful.** Information you submit must be true, accurate, complete so far as you know, and relevant to the issue. Do not exaggerate, invent or misrepresent facts.

**5.2 Frivolous and false complaints.** Do not register a Complaint you know to be false or frivolous, and do not impersonate anyone or suppress material information. Separately from these Terms, the DPDP Act imposes duties on individuals not to register false or frivolous grievances and not to impersonate others, and provides for a monetary penalty for breach of those duties.

**5.3 Do not use Complaints to harm people.** You must not submit anything that is defamatory, threatening, abusive, obscene, harassing, discriminatory (including on grounds of caste, religion, sex, gender, disability, region or language), fraudulent, malicious, or knowingly false. In particular, do not use the Complaint mechanism to target, intimidate or settle scores with another resident, an employee, a security guard, a domestic worker, a housekeeping or maintenance worker, a vendor, a contractor, an RWA office bearer or anyone else.

**5.4 Complaints are seen by others.** A Complaint is not anonymous and is not private in the ordinary sense. It will be visible to authorised administrators and to the people who need it to investigate or resolve the issue. Even where we remove your name, the nature of a Complaint — a unit number, a location, a photograph — may identify you. Please write on that basis.

**5.5 Our handling rights.** So that the system stays usable and lawful, we and the RWA may: redact or remove material; restrict who can see a Complaint; ask you for more information; reject or close a Complaint that is outside the Platform's scope, duplicated, abandoned or contrary to these Terms; merge related Complaints; reopen or reclassify a Complaint; and escalate a Complaint to the RWA, a vendor, an authority or the police where we reasonably consider it necessary. Where practicable and lawful, we will record the reason.

**5.6 If you are named in a Complaint.** If you believe a Complaint about you is false, defamatory or otherwise unlawful, write to the Grievance Officer at clause 31. We will review it and take such action as is appropriate, which may include restricting access to the material.

**5.7 Records.** We keep Complaint records, including closed and rejected ones, for the operational, legal, audit, dispute-resolution and security purposes described in clause 20.

### 6. Rules of acceptable use

**6.1** You must not:

- (a) attempt to gain unauthorised access to the Platform, any account, any administrator function, or any data that is not yours;
- (b) hack, penetration-test without written authorisation, bypass or attempt to bypass authentication, access controls, rate limits or other security measures;
- (c) reverse engineer, decompile or disassemble the Platform, except to the extent Indian law expressly permits it despite a contractual restriction;
- (d) scrape, crawl, harvest or bulk-extract data, including residents' names, unit numbers or contact details;
- (e) use bots, scripts or other automated means to access the Platform, or misuse any API or technical interface, without our written permission;
- (f) introduce malware, or anything designed to disrupt, damage, overload or degrade the Platform or its infrastructure;
- (g) interfere with or disrupt the Platform, its servers or its networks, including by excessive or automated request volumes;
- (h) use the Platform for any unlawful purpose, or in breach of the RWA's bylaws;
- (i) use another person's account, or allow another person to use yours in breach of clause 4.4;
- (j) resell, sublicense or commercially exploit access to the Platform;
- (k) upload another person's Aadhaar number, financial account or card numbers, biometric data, health information, or other sensitive information about a third party, unless we specifically ask you for it and it is necessary for the matter in hand.

**6.2** Some of the conduct listed above is also a criminal offence under the Information Technology Act, 2000 and other laws. We may report suspected offences to the appropriate authorities and preserve relevant records.

### 7. Your Content and the licence you give us

**7.1 You keep ownership.** You continue to own what you submit. We do not claim ownership of your Complaints, photographs, videos, documents or comments.

**7.2 What you confirm when you submit.** By submitting Content, you confirm that, so far as you are reasonably aware:

- (a) you have the right and any necessary permission to submit it;
- (b) it does not infringe anyone's intellectual property, privacy, confidentiality or other rights;
- (c) it is not unlawful, and does not breach clause 5 or 6;
- (d) where it shows or identifies another person, you have a legitimate reason for including them and have limited what you include to what is necessary.

**7.3 Photographs and videos — please be careful.** Photograph the *problem*, not the *people*. Avoid capturing faces, children, domestic workers, vehicle number plates, house interiors and documents belonging to others unless they are genuinely necessary to explain the issue. Do not submit sensitive personal information about yourself or anyone else — including Aadhaar or other government ID numbers, financial account details, biometric data, health or medical information, or information about a person's caste, religion or sexual life — unless we have specifically asked for it and it is necessary.

**7.4 The licence.** So that we can actually run the service, you grant us and the RWA a **non-exclusive, royalty-free, worldwide licence to host, store, copy, display, transmit, adapt (only for formatting, redaction, compression or accessibility), and disclose your Content** — but only:

- (a) for the purposes set out in clause 12;
- (b) to the extent reasonably necessary for those purposes; and
- (c) for as long as clause 20 permits us to retain it.

This licence does not permit us to sell your Content, to license it to advertisers, or to use it in marketing or publicity, unless you give separate, specific consent. If we use Complaint information for reporting, analysis or service improvement, we will use it in **aggregated or de-identified form** wherever that is practicable.

**7.5 Feedback.** If you send us suggestions about the Platform, we may use them without obligation to you. This applies to product suggestions only, not to Complaint content.

### 8. Relationship with the RWA

**8.1 Two different organisations.** Anytime Help and the RWA are separate legal persons. The arrangement between us is set out in a separate agreement, which may change.

**8.2 What the RWA does.** The RWA and its office bearers, staff, contractors and vendors are responsible for community administration and for actually delivering maintenance, security, housekeeping and other services, under the RWA's bylaws, resolutions, budgets and applicable law.

**8.3 What we do not do.** We do not control the RWA's decisions, budgets, choice of vendors, priorities, or the standard or timing of work it arranges, and we do not adjudicate disputes between residents or between a resident and the RWA.

**8.4 Administrator access.** Authorised RWA administrators can see Complaints and the resident information needed to handle them. They must use that access only for community administration and keep it confidential. Their access is logged.

**8.5 Charges.** Maintenance charges, service charges and penalties levied by the RWA are matters between you and the RWA under its own rules, not under these Terms, unless we expressly state otherwise for a specific paid feature.

### 9. Communications

**9.1 Service communications.** We will send communications necessary to run the service — Complaint acknowledgements and status updates, community announcements and RWA notices, security alerts, OTPs, service interruption notices, and changes to these Terms or the Privacy & Data Declaration. **These are not marketing messages, and you cannot opt out of them while your account remains open**, because they are part of the service itself. You can usually control *how* you receive them (push, SMS, email, in-app) in your settings, subject to a minimum channel for security and legal notices.

**9.2 Marketing and promotional communications.** Any promotional or advertising communication is separate, optional, and sent only with your specific consent, which you can withdraw at any time without affecting the rest of the Platform.

**9.3 Advertising in the app.** Where the Platform displays advertisements, they are contextual only: they are shown to all residents alike and are not selected using your personal data, your Complaint history or your in-app behaviour. If that ever changes we will ask for your separate, specific consent first, you may refuse or withdraw at any time, refusing will not affect any other part of the Platform, and we will not direct advertising at anyone under 18.

**9.4 Delivery.** SMS, email and push messages depend on your device, network, operator and settings, and on third-party providers. We cannot guarantee delivery, timing or that a message will not be filtered.

**9.5 Notices to you.** Legal notices under these Terms may be given through the app, by email or by SMS to your registered details. It is your responsibility to keep those details current.

---
## PART 2 — PRIVACY & DATA DECLARATION

This Part is our notice to you about how your personal data is handled. It is written to be read alongside the acceptance screen you see when you first sign in.

### 10. Who is responsible for your personal data

**10.1 Platform-led.** Anytime Help decides the purposes and means of processing your personal data on the Platform and is therefore the Data Fiduciary for it under the DPDP Act. The RWA is a separate Data Fiduciary for its own community records held outside the Platform. [CONFIRM THIS MATCHES THE ACTUAL ARRANGEMENT WITH EACH FACILITY — see Part A.0 and Part F.]

**10.2** Whichever model applies, you can raise any data question with the Grievance Officer at clause 31 and we will route it to the right organisation.

**10.3 Honest note on classification.** How we are described under the DPDP Act, the Information Technology Act, 2000 and the rules made under them depends on facts about how the Platform is operated, which may change as the service develops. We do not claim any legal status, certification or accreditation that has not been formally established. Where our role changes in a way that affects you, we will update this document under clause 30.

### 11. What we collect

**11.1 Information you give us**

- **Name**, and where relevant the names of authorised occupants of your unit.
- **Unit details**: tower/block, flat number, and where relevant ownership or tenancy status and parking allocation.
- **Contact details**: mobile number, email address, alternate contact number.
- **Account and login information**: registered identifier, password (stored hashed, never in readable form), OTP verification records, account settings.
- **Complaint details**: category, description, location, dates, urgency, and anything else you write.
- **Attachments**: photographs, videos, audio, documents and files you upload.
- **Communications**: messages, comments, follow-ups, feedback, and support or call records.
- **Verification material** where the RWA requires it, such as an allotment letter, lease or membership record. [SPECIFY WHAT IS ACTUALLY REQUIRED — collect as little as possible.]

**11.2 Information collected automatically**

- **Device and technical**: device model, OS and app version, language, device or installation identifier.
- **Log and IP**: IP address, access timestamps, screens accessed, actions taken, error and crash reports.
- **Security**: login attempts, authentication events, records of suspicious activity.

**11.3 Information from others.** From the **RWA**: your resident status, unit records and authorisation to use the Platform. From **Service Partners** handling your Complaint: updates, work records, completion reports and photographs of work done.

**11.4 What we do not want.** We do not ask for and do not want your **Aadhaar number**, PAN, passport or other government ID numbers, bank or payment card numbers, biometric data, health information, or information about your caste, religion, political views or sexual life. Please do not submit these. If they reach us anyway — in a Complaint description or a photograph — we will delete or redact them where we reasonably can. [If any verification process genuinely requires an identity document, replace this paragraph with an accurate description and take counsel's advice first — see Part F.]

### 12. Why we use your information, and on what basis

**12.1 Purposes.** We use personal data to:

| # | Purpose | Examples |
|---|---|---|
| 1 | Create and run your account | Registration, resident verification, OTP authentication, password reset |
| 2 | Community administration | Publishing announcements, notices, water and power timings, meeting information |
| 3 | Register, route and resolve Complaints | Assigning to the right team or vendor, sharing what they need, tracking status, closing and reopening |
| 4 | Communicate with you | Acknowledgements, updates, service notices, responses to your queries |
| 5 | Security and fraud prevention | Detecting unauthorised access, abuse, false or duplicate Complaints, protecting the Platform and its users |
| 6 | Improve and maintain the Platform | Fixing bugs, diagnosing faults, understanding which features are used, capacity planning — using aggregated or de-identified data wherever practicable |
| 7 | Legal and regulatory compliance | Responding to lawful requests, meeting record-keeping duties, cooperating with authorities |
| 8 | Records, audit and disputes | Keeping an accurate history of what was reported and done, supporting audits, establishing or defending legal claims, enforcing these Terms |
| 9 | Optional features you switch on | Anything you separately consent to, such as promotional messages |

**12.2 Our lawful basis — described honestly.** Consent is not the only lawful basis under Indian law, and it would be misleading to tell you it is.

- **Consent** applies to account creation and to anything optional, including promotional communications and (if introduced) advertising personalisation. Where we rely on consent, you can withdraw it — see clause 21.
- **Voluntary provision for a specified purpose.** When you submit a Complaint so that it can be resolved, and you do not indicate that you object, the DPDP Act's "certain legitimate uses" provisions can support our processing of that Complaint for that purpose. In practice this means we may continue handling a Complaint you have already filed even while you are reconsidering your broader consents.
- **Compliance with law** applies where a statute, a court order or a lawful authority requires us to process or disclose information.
- **Security and record-keeping** processing may continue for as long as clause 20 permits, because we cannot verify a security incident or defend a claim using data we have deleted.

**12.3 Withdrawing consent has consequences.** If you withdraw consent for the processing that is necessary to operate your account, we will not be able to keep providing the Platform to you, and we may close your account. This is a practical consequence, not a penalty. It does not affect processing already carried out lawfully, or information we are required or permitted to keep under clause 20.

### 13. Data minimisation and accuracy

**13.1** We aim to collect only what is reasonably necessary for the purposes in clause 12, to keep it only as long as needed, and to limit who inside the organisation can see it.

**13.2** The Platform depends on what you tell us. Please make sure your Complaints and your profile details are accurate and up to date; you can correct them at any time under clause 21. We are not able to verify most of what residents submit, and inaccurate information can lead to delay, to work being done at the wrong location, or to the wrong person being contacted.

### 14. Sharing Complaint information so it can be resolved

**This is the clause we most want you to read.**

**14.1 The basic point.** A Complaint cannot be resolved by us alone. To get a leaking pipe fixed, someone has to be told which flat is leaking and be able to reach you. So when you raise a Complaint, we will share the information reasonably necessary to investigate or resolve it with the people responsible for that service.

**14.2 Examples.** A housekeeping complaint may go to the housekeeping agency and supervisor. A security complaint may go to the security agency and, if serious, to the police. A plumbing, electrical, lift, water or civil complaint may go to the relevant contractor or technician. A parking complaint may go to the RWA and the parking or security team. A waste-management complaint may go to the waste contractor or the municipal authority. A complaint about a common utility may go to the electricity distribution company or the water utility.

**14.3 The need-to-know limit.** We will share only what is reasonably necessary for the recipient to do their job — typically the nature of the issue, the location, the timing, relevant attachments, and enough contact information for them to reach you or arrange access. We will not share more than that just because it is convenient, and we will redact or withhold material where that is practicable without obstructing resolution.

**14.4 Two different kinds of recipient — and this matters.**

**(a) Service Partners** act **on our or the RWA's behalf and under instructions**. Before giving them access we require written terms covering confidentiality, purpose limitation, security measures, restrictions on onward disclosure, notification of incidents, and deletion or return of data. **Where the law makes us responsible for a Service Partner's processing on our behalf, we accept that responsibility. We do not, and cannot, contract out of it.**

**(b) Independent Recipients** receive information and then decide for themselves what to do with it — the police, government and municipal authorities, courts, utilities, insurers, and agencies the RWA engages directly on its own account. They are responsible in their own right under Indian law for how they handle your information. We do not control them and we cannot direct what they do after a lawful disclosure.

**14.5 What we are and are not responsible for.** After we have made a lawful, proportionate, need-to-know disclosure to an Independent Recipient, **we are not responsible for that recipient's own subsequent acts or omissions**, including misuse, unauthorised disclosure, further processing, loss, or failure to act, to the extent Indian law permits us to say so.

**That limitation does not apply to, and nothing in this document excludes, our responsibility for:**

- (a) our own decision to disclose, including a disclosure that was unlawful, unnecessary, or made to the wrong recipient;
- (b) disclosing more information than was reasonably necessary;
- (c) our own negligence, gross negligence, wilful misconduct, fraud or breach of these Terms, including negligence in selecting, instructing or supervising a recipient we chose;
- (d) our failure to put in place, or to enforce, the safeguards described in clause 14.4(a);
- (e) our statutory responsibility for processing carried out on our behalf; or
- (f) any liability that cannot lawfully be excluded or limited.

**14.6 Anonymity.** We cannot guarantee that you will not be identified. Removing your name does not always work: a unit number, a photograph, a timeline or the subject-matter itself may reveal who complained. If identification would cause you a problem, please consider that before you submit, and tell us at the point of submission if you have a specific concern.

**14.7 If you do not want information shared.** You may ask us not to share particular information. We will respect that where we can, but if the information is necessary to investigate or resolve the Complaint, we may be unable to progress it, and we may close it on that basis with a note explaining why.

**14.8 Disclosure records.** We keep a record of what was disclosed, to whom, when, and why.

### 15. Other disclosures

We may also disclose personal data:

- **Where the law requires it** — to a court, regulator, law enforcement agency, or other authority acting under lawful authority. We will satisfy ourselves that the request is lawful and will limit what we provide to what is required.
- **To protect people** — where we reasonably believe disclosure is necessary to prevent or address a serious risk to a person's life, health or safety, or a serious crime.
- **To professional advisers** — lawyers, auditors and insurers, under duties of confidentiality, where necessary for advice, audit or claims.
- **On a business transfer** — if our business, or the part of it that operates the Platform, is transferred, merged or restructured, subject to the recipient being bound to equivalent protections and to applicable law. We will notify you where required.

We do **not** sell your personal data.

### 16. Service providers, hosting and cloud infrastructure

**16.1** The Platform is hosted on **Amazon Web Services (AWS)**, which operates on a shared responsibility basis: AWS is responsible for the security **of** its cloud infrastructure, and we are responsible for how we configure and secure what we run **in** it.

**16.2** We make no representation about AWS's own certifications and do not present any AWS certification, audit or attestation as ours. AWS's own terms govern its services.

**16.3** We use Firebase Authentication (Google) to authenticate accounts and verify OTPs. We also use Service Partners for functions such as [EMAIL DELIVERY, PUSH NOTIFICATIONS, ERROR MONITORING — LIST ACTUAL PROVIDERS]. They are engaged under written terms and may use the data only to provide their service to us. A current list of categories is available from the Grievance Officer on request.

### 17. Where information is stored, and cross-border processing

**17.1** We intend to store personal data primarily in **[AWS REGION, e.g. Asia Pacific (Mumbai) ap-south-1]**, within India. [CONFIRM AND KEEP ACCURATE — do not state this unless it is true of every service you use, including backups, logs and monitoring.]

**17.2** [**INCLUDE ONLY IF TRUE:**] *Some limited processing may involve access from, or storage in, locations outside India — for example where a support, monitoring or communications provider operates internationally, or where backups are replicated to another region. Where that happens, we take steps to ensure appropriate contractual protections are in place. Under section 16 of the DPDP Act, transfers outside India are permitted except to countries or territories restricted by notification of the Central Government, and we will comply with any such restriction, as well as with any sectoral law that imposes stricter requirements.*

**17.3** If we make no cross-border transfer, clause 17.2 does not apply and will be removed. We will not claim a data-localisation position that is not accurate.

### 18. Security

**18.1** We take **reasonable technical and organisational security safeguards** against unauthorised access, use, alteration, disclosure and loss. At a category level these include: encryption in transit and at rest; role-based, least-privilege access control; multi-factor authentication for administrators; access logging and monitoring; secure credential storage; separation of environments; periodic access review; vendor security requirements; and staff confidentiality obligations.

**18.2** **We do not claim that the Platform is completely secure, and you should not assume that it is.** No internet-connected system can be guaranteed against every attack, failure or human error. What we commit to is reasonable measures, kept under review, and prompt action if something goes wrong. Any statement suggesting the Platform is "100% secure" or that data "can never be leaked" would be wrong, and we do not make it.

**18.3** Your part matters too: keep credentials confidential, use a strong password, keep your device and the app updated, and do not use the Platform on a device you do not trust.

### 19. Data breaches

**19.1** We maintain an incident-response process for detecting, investigating, containing and remedying personal data breaches.

**19.2** If a breach affects your personal data, we will inform you and the relevant authority in the manner and within the timelines required by applicable law, including the DPDP Act and the rules made under it, telling you what happened, what data was involved so far as we know, what we are doing, and what you can do to protect yourself. Where the law requires earlier intimation, we will not delay it to complete an investigation first.

**19.3** Where separate reporting obligations apply — for example to CERT-In under directions issued under section 70B of the Information Technology Act, 2000 — we will comply with them.

**19.4** If you think there has been a security problem, tell us immediately at support@anytimehelp.com.

### 20. How long we keep information

**20.1 The principle.** We keep personal data for as long as it is needed for the purposes in clause 12, and then delete or anonymise it.

**20.2 Indicative periods.** [**TO BE FIXED BY COUNSEL — DO NOT PUBLISH UNTIL SET:**]

| Category | Retention |
|---|---|
| Account and profile data | While the account is active, then [PERIOD] |
| Complaint records and attachments | [PERIOD] after closure |
| Communications and support records | [PERIOD] |
| Security, access and audit logs | [PERIOD — note the 180-day ICT log retention requirement under the CERT-In directions of 28 April 2022, where applicable] |
| Consent and acceptance records | [PERIOD — recommend for the life of the account plus the limitation period] |
| Backups | Overwritten on a [PERIOD] cycle |

**20.3 Exceptions.** Even after you ask us to delete information or close your account, we may retain what is reasonably necessary:

- (a) to comply with a legal, regulatory, tax, accounting or audit requirement;
- (b) to establish, exercise or defend legal claims, including within the limitation period applicable to a possible claim;
- (c) to investigate or respond to a security incident, fraud, abuse or misuse;
- (d) to enforce these Terms or to deal with an unresolved dispute or grievance;
- (e) to maintain the integrity of community records, for example that a particular repair was carried out; and
- (f) where information is held in secure backups, until those backups are overwritten in the ordinary cycle.

Information retained under this clause is restricted to those purposes and is not used for anything else.

**20.4** Where practicable, we will de-identify or aggregate rather than retain identifiable data.

### 21. Your rights, and how to use them

**21.1** Subject to applicable law and verification of your identity, you may:

- (a) **ask what we hold** about you, how it has been used, and a summary of who it has been shared with;
- (b) **correct or complete** inaccurate, incomplete or out-of-date information;
- (c) **ask us to erase** personal data no longer needed for the purpose it was collected for, where no exception in clause 20.3 applies;
- (d) **withdraw consent** where we rely on it, as easily as you gave it — see clause 12.3;
- (e) **nominate** another individual to exercise your rights on your death or incapacity, as the DPDP Act provides;
- (f) **complain** to us through clause 31; and
- (g) **escalate** to the Data Protection Board of India or another competent authority under applicable law.

**21.2 How.** Use the in-app privacy settings, or write to support@anytimehelp.com with enough detail to identify yourself and your request.

**21.3 Timing.** We aim to acknowledge within 72 hours and respond substantively within [RESPONSE PERIOD], or sooner where the law requires.

**21.4 Account deletion.** Delete your account yourself from **Profile → Delete My Account** in the app, which takes effect immediately, or email support@anytimehelp.com with the subject "Account Deletion Request" and we will complete it within 48 to 72 hours. We will close the account and delete or de-identify the personal data associated with it, subject to clause 20.3 and to the RWA's own separate records of your residency.

**21.5 Your duties.** Give accurate information, do not impersonate anyone, do not suppress material information, and do not raise a false or frivolous grievance. The DPDP Act attaches duties and a monetary penalty to these matters.

### 22. Children

**22.1** Accounts are for adults. We do not knowingly create accounts for anyone under 18, and if we discover one, we will close it.

**22.2** If we ever process a child's personal data — for example because a Complaint necessarily concerns a child — we will comply with the DPDP Act's requirements for children's data, which include obtaining verifiable consent from a parent or lawful guardian, and prohibit tracking, behavioural monitoring and targeted advertising directed at children.

**22.3** Please do not upload photographs or videos of children, including your own, unless it is genuinely necessary for the Complaint. If you do, we may redact them.

### 23. Cookies, analytics and logs

**23.1** The mobile app does not use browser cookies in the ordinary sense, but it does use device identifiers, local storage and similar technologies to keep you signed in, remember your settings, and keep the app secure. Any associated website may use cookies, with a separate cookie notice and, where required, a consent mechanism.

**23.2** We use technical logs and diagnostics to keep the Platform working and secure. Where we use analytics, we use only aggregated, de-identified usage statistics, and non-essential analytics will be subject to your consent where the law requires it.

**23.3** We do not use the Platform to track your activity across other apps or websites, and we do not sell tracking data.

---
## PART 3 — LEGAL TERMS

### 24. Availability, and things outside our control

**24.1** We aim to keep the Platform available but do not promise uninterrupted or error-free service. Access may be interrupted or degraded by maintenance, upgrades, faults, capacity limits, security measures, or events beyond our reasonable control.

**24.2** Matters outside our reasonable control include: internet and network failures; your device, OS, app version, storage or battery; mobile operator and messaging failures or delays; app store issues; power failures; failures of cloud infrastructure and other third-party services; cyber attacks; strikes; civil disturbance; natural events; and acts of government or other authorities.

**24.3** We may suspend the Platform temporarily for maintenance or security, giving advance notice where practicable.

### 25. Disclaimers

**25.1** Except as expressly stated in these Terms and subject to clause 26.6, the Platform is provided **on an "as is" and "as available" basis**, and we do not give any other warranty, express or implied, to the maximum extent Indian law permits.

**25.2** We do not warrant or guarantee:

- (a) that a Complaint will be resolved, or resolved within any particular time, or resolved in a particular way;
- (b) the performance, quality, timeliness, safety, workmanship or conduct of any vendor, contractor, agency, technician, security or housekeeping personnel, or other third party;
- (c) the accuracy, completeness or currency of information supplied by residents, the RWA, its personnel, vendors, agencies or authorities, and displayed on the Platform;
- (d) that notifications will be delivered, or delivered on time;
- (e) that content submitted by residents is truthful or lawful; or
- (f) that the Platform will meet any particular requirement of yours.

**25.3** Nothing on the Platform is legal, financial, medical, engineering, safety or professional advice.

**25.4** Clause 1 (emergency services) applies at all times and is not qualified by anything in this clause or elsewhere.

### 26. Limitation of liability

**Please read this clause carefully. It limits what you can recover from us — but not everything, and not in every situation.**

**26.1 Losses we exclude.** To the maximum extent permitted by Indian law, none of the parties described in clauses 26.2 to 26.5 is liable to you for indirect, incidental, special, punitive or consequential loss, or for loss of profit, loss of business, loss of opportunity, loss of goodwill, loss of anticipated savings, or loss or corruption of data, however arising.

**26.2 Liability of Anytime Help.**

- (a) We are liable for loss you suffer that is directly caused by our own breach of these Terms, our negligence, or our failure to comply with a legal obligation owed to you.
- (b) Subject to clause 26.6, our total aggregate liability to you for all claims arising in any period of twelve months is limited to the **higher** of (i) the total amounts actually paid by you or on your behalf for your access to the Platform in that period, and (ii) **₹[FLOOR AMOUNT — to be set by counsel; it should not be nominal]**.
- (c) We are not liable for the acts or omissions of the RWA, of an Independent Recipient after a lawful disclosure under clause 14.5, or of any third party we did not select and do not control, except where our own act or omission contributed to the loss or where the law makes us responsible.

**26.3 Liability of the RWA.** The RWA is responsible for its own decisions, its own personnel, the vendors it engages directly, and its compliance with its bylaws and applicable law. Nothing in these Terms limits or excludes any liability the RWA owes you under its bylaws, under the statute under which it is constituted, or under general law. We do not accept liability on the RWA's behalf, and the RWA does not accept liability on ours. [CONFIRM WHETHER THE RWA IS A PARTY TO THIS DOCUMENT — see Part F.]

**26.4 Liability of individuals.**

- (a) Directors, founders, office bearers, employees, administrators and authorised personnel of Anytime Help and of the RWA act in an official capacity. **You agree not to bring a personal claim against any such individual in respect of an act or omission done in good faith within the scope of their authorised role, and instead to bring any such claim against the organisation concerned.** Anytime Help holds the benefit of this undertaking on behalf of those individuals as well as for itself.
- (b) **This does not apply**, and no individual is protected by it, where that individual has acted with fraud, dishonesty, wilful misconduct or gross negligence, or has acted outside the scope of their authority, or has committed a criminal offence.
- (c) Nothing in this clause excludes or limits any criminal liability, or any personal liability that Indian law does not allow to be excluded.

**26.5 Liability of independent third parties.** Vendors, contractors, agencies, utilities, authorities and other Independent Recipients are responsible for their own acts and omissions. These Terms do not limit any claim you may have directly against them, and do not create any obligation on us to pursue a claim on your behalf.

**26.6 What is never excluded.** Nothing in these Terms excludes or limits liability for:

- (a) death or personal injury caused by negligence;
- (b) fraud or fraudulent misrepresentation;
- (c) wilful misconduct or gross negligence;
- (d) any obligation, penalty or liability under the DPDP Act, the Information Technology Act, 2000, the Consumer Protection Act, 2019, or any other Indian law, to the extent it cannot lawfully be excluded or limited; or
- (e) anything else that Indian law does not permit to be excluded or limited.

**26.7 Statutory rights preserved.** If you are a "consumer" for the purposes of the Consumer Protection Act, 2019, nothing in these Terms affects your rights under that Act, and any term that would otherwise be an unfair contract term within the meaning of that Act does not apply to you to that extent.

**26.8 Severability of this clause.** If any part of clause 26 is held unenforceable, that part is severed and the remainder continues to apply.

### 27. Your responsibility, and indemnity

**27.1** You are responsible for what you submit and for the consequences of submitting it.

**27.2** You agree to indemnify us, the RWA and their respective personnel against loss, liability, cost and reasonable legal expenses that any of them actually incurs as a direct result of:

- (a) a Complaint or other Content you submitted that is knowingly false, defamatory, harassing or otherwise unlawful;
- (b) your breach of clause 5, 6 or 7; or
- (c) your unlawful or fraudulent use of the Platform.

**27.3** This indemnity does **not** apply to the extent the loss was caused or contributed to by our own act or omission, by the RWA's, or by a failure to mitigate. We will notify you promptly of any claim, will not settle it without consulting you, and will give you a reasonable opportunity to participate in its defence.

**27.4** Nothing in this clause requires you to indemnify anyone in respect of a Complaint you made honestly and in good faith, even if it turns out to be mistaken. **Making a genuine complaint that proves to be wrong is not a breach of these Terms.**

### 28. Suspension and termination

**28.1** You may stop using the Platform and ask us to close your account at any time under clause 21.4.

**28.2** We or the RWA may suspend or terminate your access on the grounds in clause 4.7, or where you cease to be entitled to use the Platform.

**28.3** On termination, clauses 7.4 (to the extent needed for retained records), 14, 20, 25, 26, 27, 31, 32 and 33 survive.

**28.4** We may terminate the Platform as a whole, or our arrangement with the RWA, on reasonable notice, and we will tell residents where practicable and cooperate in the orderly transfer or deletion of records.

### 29. Intellectual property

**29.1** The Platform — its software, source code, design, interface, layout, graphics, icons, text, databases, and the "Anytime Help" name and logo — belongs to Anytime Help or its licensors and is protected by Indian and international intellectual property law.

**29.2** We grant you a **limited, personal, non-exclusive, non-transferable, non-sublicensable and revocable right** to use the Platform on your own device to use the services as a resident. That is all; nothing else is transferred.

**29.3** You must not copy, reproduce, modify, adapt, translate, create derivative works from, publish, distribute, sell, licence, commercially exploit, frame, mirror, scrape or reverse engineer the Platform or any part of it, except to the extent Indian law expressly permits despite this restriction.

**29.4** Trade marks, names and logos of the RWA, vendors and other third parties belong to them.

**29.5** **Your Content remains yours.** Clause 7 sets out the limited licence you give us; nothing in clause 29 transfers ownership of your Complaints, photographs, videos or documents to us.

### 30. Changes to these Terms

**30.1** We may update these Terms and the Privacy & Data Declaration — for example to reflect changes in the service, in our arrangement with the RWA, or in the law.

**30.2** Every version carries a version number and an effective date. Previous versions will be available in the app at [IN-APP PATH] or on request.

**30.3 Minor changes** (corrections, clarifications, contact details) take effect when published in the app.

**30.4 Material changes** — for example to the categories of data collected, the purposes, the sharing arrangements, your rights, or the liability provisions — will be notified to you at least **[NOTICE PERIOD, e.g. 14 days]** in advance through the app and by email, and will identify what has changed.

**30.5 Re-acceptance.** Where a material change affects the basis on which your personal data is processed, or materially changes your obligations, we will ask you to accept the new version before you continue to use the Platform, and we will record that acceptance.

**30.6** If you do not accept a material change, you may close your account under clause 21.4. Continuing to use the Platform after a change takes effect means you accept it, but we will not treat mere continued use as acceptance where clause 30.5 requires an express re-acceptance.

### 31. Grievance redressal and contact

**31.1** For anything to do with your data, this document, or a decision we have taken, contact:

> **Grievance Officer**
> Name: [GRIEVANCE OFFICER NAME]
> Designation: [DESIGNATION]
> Email: support@anytimehelp.com
> Postal address: [GRIEVANCE ADDRESS]
> Telephone: [PHONE]
> Hours: [HOURS]

**31.2** We aim to acknowledge within [24–72 HOURS] and to resolve within [15–30 DAYS], or sooner where the law requires.

**31.3** We have not appointed a Data Protection Officer. We will not describe anyone as one unless that appointment has actually been made, and we will update this clause if we become required to make it.

**31.4** For community matters — maintenance, charges, bylaws, staff, occupancy — contact the RWA at [RWA CONTACT].

**31.5** If you are not satisfied with our response on a data protection matter, you may escalate to the Data Protection Board of India or another competent authority in accordance with applicable law.

### 32. Governing law and disputes

**32.1 Governing law.** These Terms and any dispute arising out of or in connection with them, including non-contractual disputes, are governed by the laws of India.

**32.2 Jurisdiction.** Subject to clause 32.4, the courts at **[CITY], [STATE], India** have jurisdiction. [Insert the place where the company has its registered office or principal place of business, or where the community is located. Do not name a city that has no connection with either party — an exclusive jurisdiction clause is only effective in favour of a court that would otherwise have jurisdiction.]

**32.3 Talk to us first.** Before starting proceedings, please raise the matter through clause 31 and give us [30 DAYS] to resolve it. This is a request in good faith, not a bar on your legal rights.

**32.4 Consumer rights preserved.** Nothing in this clause prevents you from pursuing a remedy before a consumer commission or other forum where the law gives you that right, and any such right is not affected by clause 32.2 or 32.5.

---

> ### 🔶 OPTIONAL CLAUSE 32.5 — ARBITRATION
> **DO NOT INCLUDE THIS WITHOUT SPECIFIC LEGAL ADVICE. See Part F, items 22–24.**
>
> *"Any dispute arising out of or in connection with these Terms that is not resolved under clause 32.3 shall be referred to and finally resolved by arbitration under the Arbitration and Conciliation Act, 1996, by a sole arbitrator appointed by agreement between the parties or, failing agreement within 30 days, in accordance with that Act. The seat and venue of arbitration shall be [CITY], India. The language shall be English. The arbitrator's award shall be final and binding. Each party shall bear its own costs unless the arbitrator directs otherwise. This clause does not apply to, and does not restrict, any claim that a resident is entitled to bring before a consumer commission or any other forum where the law confers a non-excludable right, and does not prevent either party from seeking urgent interim relief from a court."*
>
> **Why this needs advice.** Indian courts have held that consumer disputes are not arbitrable and that a consumer cannot be forced into arbitration by a standard-form clause (the *Emaar MGF Land Ltd v. Aftab Singh* line of authority). An arbitration clause imposed on residents in a take-it-or-leave-it app agreement is likely to be unenforceable against them, may be characterised as an unfair contract term, and may cost you more than it saves given arbitration fees relative to the likely value of resident claims. Many platforms in this position are better served by a clear escalation and grievance process, an optional mediation step under the Mediation Act, 2023, and ordinary court jurisdiction.

---

### 33. General

**33.1 Whole agreement.** These Terms, together with the Privacy & Data Declaration and any notice we give you at the point of collection, form the whole agreement between you and us about the Platform. They do not affect the RWA's bylaws.

**33.2 Severability.** If any provision is held invalid or unenforceable, it is read down to the minimum extent necessary to make it valid, or severed if that is not possible; the rest continues in force.

**33.3 No waiver.** If we do not enforce a right immediately, we do not lose it.

**33.4 Assignment.** You may not transfer your account or your rights under these Terms. We may assign or transfer our rights and obligations to a group company or in connection with a business transfer, provided your rights under these Terms are not reduced.

**33.5 No third-party beneficiaries**, except that clause 26.4 is expressly for the benefit of the individuals it names, and clauses 26.3, 26.5 and 27.2 are for the benefit of the RWA and its personnel; those benefits are held by us on their behalf.

**33.6 Language.** These Terms are prepared in English. Translations may be made available for convenience; in the event of inconsistency, the English version prevails. [Consider making a Hindi version available; the DPDP Act contemplates notice being available in English and the languages specified in the Eighth Schedule to the Constitution.]

**33.7 Electronic records and evidence.** These Terms, your acceptance, and the records we keep of them are electronic records. You agree that a record produced from our systems, accompanied by a certificate under section 63 of the Bharatiya Sakshya Adhiniyam, 2023 where required, may be relied on as evidence of your acceptance and of its date, time and version.

**33.8 Relationship.** Nothing in these Terms creates a partnership, joint venture, agency or employment relationship between you and us.

**33.9 Force majeure.** Neither party is liable for failure to perform caused by an event beyond its reasonable control, as described in clause 24.2, for so long as that event continues.

**33.10 Limitation period.** Nothing in these Terms shortens any limitation period fixed by the Limitation Act, 1963.

### 34. Your declaration and acceptance

**By ticking the acceptance box and continuing, you confirm that:**

**34.1** You are 18 years of age or older and are a resident, owner or authorised occupant of a unit in a society, campus or facility that uses Anytime Help, or are otherwise authorised by the RWA to use the Platform.

**34.2** You have been given, and have had a fair opportunity to read, these Terms & Conditions and the Privacy & Data Declaration in Part 2, in a language you understand.

**34.3** You agree to be bound by them, and you are entering into this agreement freely and by clear affirmative action through electronic means.

**34.4** You understand and specifically acknowledge that **information you submit through the Platform, including Complaint descriptions, your name, unit number, contact details and any photographs or documents you attach, may be shared, to the extent reasonably necessary, with authorised administrators, the RWA, and the service providers, contractors, agencies, utilities or authorities responsible for investigating or resolving your Complaint**, as described in clause 14.

**34.5** You understand that once information has been lawfully and proportionately shared with an Independent Recipient that acts on its own account, that recipient is responsible for its own handling of that information, and that this does not affect our responsibility for our own acts, omissions and legal obligations as set out in clause 14.5.

**34.6** You understand that **Anytime Help is not an emergency service** and that in an emergency you must contact 112 or the appropriate emergency service directly.

**34.7** The information you give will be true and accurate to the best of your knowledge, and you will not submit false, frivolous, defamatory or unlawful Complaints or use the Platform to harass anyone.

**34.8** You consent to the processing of your personal data for the purposes described in clause 12, on the basis described in clause 12.2, and you understand that you may withdraw consent under clause 21, with the consequences described in clause 12.3.

**34.9** You understand that a record of this acceptance — including the version of this document, the date and time, and your user identifier — will be stored as evidence of your agreement.

---

*End of resident-facing document.*

---
# PART D — FIRST-LOGIN CHECKBOX AND DECLARATION

## D.1 The mandatory checkbox (short form)

Present as an **unticked** checkbox. The user must tap it. Do not pre-tick it — a pre-ticked box is not a clear affirmative action and is not valid consent under the DPDP Act.

> ☐ **I confirm I am 18 or over. I have read and understood the [Terms & Conditions] and the [Privacy & Data Declaration], and I agree to them. I understand that information in my complaints — including my name, unit number, contact details and any photos or files I attach — may be shared, to the extent reasonably necessary, with the RWA, authorised administrators and the service providers, agencies or authorities responsible for resolving my complaint.**

The two bracketed phrases must be tappable links that open the full documents in-app.

## D.2 Optional, separately-toggled consents

These must be **separate, unticked, and refusable without blocking sign-in**. Bundling them into D.1 undermines the validity of the whole consent.

> ☐ *(Optional)* I would like to receive promotional messages and offers from Anytime Help and its partners. I can turn this off at any time.

> ☐ *(Optional)* I agree that my in-app activity may be used to make advertising shown to me more relevant. *(Include only if you actually do this — see clause 9.3 and Part F item 8.)*

Do **not** offer an optional toggle for service and security messages: those are necessary to operate the account, and clause 9.1 explains why.

## D.3 The acknowledgment block above the button

Displayed immediately above the button, always visible, not collapsed behind a "read more":

> **Before you continue**
>
> **Anytime Help is not an emergency service.** In an emergency — fire, gas leak, medical emergency, crime, or any threat to safety — call **112** (or 100 / 101 / 102) straight away. Use the app afterwards to create a record.
>
> **Your complaints are not anonymous.** To get something fixed, we pass the details to whoever handles that service — the RWA, a contractor, an agency or an authority. We share only what they reasonably need, we require them to keep it confidential where they work for us, and we log every disclosure. Once information reaches an organisation that acts on its own account, such as the police or a utility, that organisation is responsible for how it handles it. We remain responsible for our own decisions and for the safeguards we put in place.
>
> **Please be accurate and fair.** Submit truthful complaints. Do not use the app to harass or make false allegations against any resident, guard, worker, vendor or staff member — there can be legal consequences for you if you do.
>
> **Your data.** We take reasonable security measures, but no system can be guaranteed completely secure. You can see, correct or delete your information, and withdraw optional consents, at any time from Settings → Privacy.
>
> By tapping **Accept & Continue**, you are entering into a legally binding agreement by electronic means. We will record the version you accepted and the date and time.

## D.4 Button text

**Primary:** `Accept & Continue`
**Secondary (must be present, not hidden):** `Not now` — returns the user to the sign-in screen without creating the account.

Avoid "Agree", "OK" or "Get Started" alone. "Accept & Continue" pairs the affirmative act with what it means, which is what you want on the record.

**Do not** grey out or disable the button in a way that hides why. Keep it disabled until the mandatory checkbox is ticked, with helper text: *"Please confirm you agree to continue."*

## D.5 Should the Privacy Policy be separate from the Terms?

**Yes — separate documents, presented together.** Recommended structure:

1. **A short standalone privacy notice**, shown on the consent screen itself, itemising in plain language what is collected, why, and who it goes to. The DPDP Act's notice requirement is best met by a notice that stands on its own and is not buried inside a long contract. Keep it to one scrollable screen.
2. **The full Privacy & Data Declaration** as a separate linked document with its own version number and effective date. Separating it means you can update the privacy notice — which changes more often, as processors and purposes change — without forcing re-acceptance of the whole contract, and you can log consent against the privacy notice version specifically.
3. **The Terms & Conditions** as a separate linked document with its own version number.
4. Both permanently reachable from Settings → Legal, together with the version history.

Part C above is drafted as a single integrated document because that is what you asked for and it is easier to hand to counsel that way. For production, split it at the Part 1 / Part 2 boundary, give each its own version string, and keep clause 2.4's cross-reference so they still read as one agreement.

---

# PART E — IMPLEMENTATION CHECKLIST FOR THE PRODUCT AND ENGINEERING TEAM

## E.1 First-login consent UI

- [ ] Consent screen appears **before** any account is created and before any non-essential data is collected
- [ ] Privacy notice rendered on-screen, not only as a link — the link opens the full document
- [ ] Checkbox is **unticked** by default; no pre-ticks anywhere
- [ ] Mandatory consent and optional consents are **separate controls**
- [ ] Optional consents can be refused without blocking sign-in
- [ ] `Accept & Continue` disabled until the mandatory box is ticked
- [ ] Scroll-depth or explicit "I've read this" interaction recorded on the full documents
- [ ] English + Hindi at minimum; add other Eighth Schedule languages as counsel advises
- [ ] Accessible: minimum 14pt body text, sufficient contrast, screen-reader labels, no dark patterns
- [ ] `Not now` path exists and does not create an account or store an identifier

## E.2 Versioning

- [ ] Semantic version string and effective date on each of: Terms, Privacy Declaration, in-app notice
- [ ] Immutable copy of every published version stored server-side, with a SHA-256 content hash
- [ ] Version history screen in Settings → Legal
- [ ] Change classification field: `minor` vs `material`
- [ ] Material change → in-app + email/SMS notice at least [14] days ahead → forced re-acceptance flow on next login
- [ ] Users blocked from the main app until re-acceptance, with a `close my account` alternative

## E.3 Consent and acceptance records (the audit log)

For every acceptance event, store:

- [ ] `user_id`
- [ ] `terms_version`, `privacy_version`, `notice_version`
- [ ] `content_hash` of each document rendered
- [ ] `accepted_at` in **UTC**, with the device's local offset stored separately
- [ ] `consent_items[]` — each optional item with granted/refused state
- [ ] `acceptance_method` (checkbox + button tap), `app_version`, `platform`, `locale`
- [ ] `ip_address` and `device_id` — **document the purpose (evidence of acceptance and fraud prevention), state it in the notice, and set a retention period**
- [ ] Screenshot or stored render of the exact screen shown, or the content hash plus the template
- [ ] **Withdrawal events** logged with the same fields
- [ ] Log is **append-only**; no update or delete path from the application
- [ ] Exportable in a form that supports a certificate under section 63, Bharatiya Sakshya Adhiniyam, 2023
- [ ] Integrity protection: hash chaining, WORM storage, or S3 Object Lock

## E.4 Privacy and complaint-disclosure notices in the product

- [ ] Just-in-time notice **at the complaint submission screen**: "This complaint may be shared with [category of handler] to resolve it."
- [ ] Emergency warning repeated on the complaint submission screen, not only at onboarding
- [ ] Pre-upload prompt on the photo picker: "Photograph the problem, not people. Avoid faces, children, ID documents and number plates."
- [ ] Field-level guidance discouraging Aadhaar, bank details and health information; ideally a regex-based warning that flags a 12-digit number before submission
- [ ] Per-complaint **disclosure trail** visible to the resident: who it was shared with and when
- [ ] Optional "I have a confidentiality concern about this complaint" flag routed to a restricted queue

## E.5 Data retention and deletion

- [ ] Retention schedule implemented as configuration, not hard-coded
- [ ] Automated purge or anonymisation jobs, with a dry-run and an audit report
- [ ] **Legal hold** flag that suspends deletion for a specific record under dispute
- [ ] Deletion propagates to attachments in S3, search indices, caches, analytics stores and logs
- [ ] Backup deletion policy documented (backups expire on cycle rather than being edited)
- [ ] Deletion of a record produces a **tombstone** proving it was deleted and when

## E.6 Account deletion and consent withdrawal

- [ ] Self-service `Delete my account` in Settings — no email-only route, no retention dark patterns
- [ ] Clear pre-deletion explanation of what is deleted, what is retained under clause 20.3, and why
- [ ] Grace period ([7–30] days) with cancellation, then irreversible processing
- [ ] Self-service withdrawal of each optional consent, as easy as granting it
- [ ] Withdrawal takes effect on the relevant processing within [defined SLA] and stops the associated jobs
- [ ] Withdrawal does not silently break the account — explain the consequence per clause 12.3

## E.7 Data-subject request handling

- [ ] Intake route from in-app, email and post; single ticket queue
- [ ] Identity verification proportionate to the request, without collecting new ID documents
- [ ] SLA timers with escalation; acknowledgement and substantive response both tracked
- [ ] Templates for access, correction, erasure, nomination, and refusal-with-reasons
- [ ] Access response includes the **list of recipients** the data was shared with, drawn from the disclosure log
- [ ] Grievance Officer dashboard with volumes, ageing and outcomes
- [ ] Register of requests retained for audit

## E.8 Security

- [ ] TLS 1.2+ everywhere; HSTS; certificate pinning on mobile where feasible
- [ ] Encryption at rest: RDS/EBS with KMS CMKs, S3 SSE-KMS
- [ ] **S3 buckets holding complaint attachments: Block Public Access enabled at account and bucket level; served only via short-lived pre-signed URLs**
- [ ] Passwords hashed with bcrypt/argon2; no plaintext or reversible storage; no passwords or OTPs in logs
- [ ] Rate limiting and lockout on login, OTP and complaint submission
- [ ] Input validation, output encoding, parameterised queries; file-type and size validation on uploads; malware scanning of attachments
- [ ] Strip EXIF GPS metadata from uploaded images unless location is needed and disclosed
- [ ] Secrets in AWS Secrets Manager or Parameter Store; never in code or environment files in the repo
- [ ] Dependency and container scanning in CI; patching SLA by severity
- [ ] Annual VAPT by an external tester; remediation tracked
- [ ] NTP synchronisation to an authorised time source (a CERT-In directions requirement where applicable)

## E.9 Admin, third-party and role-based access

- [ ] Named individual accounts for every administrator — **no shared logins, ever**
- [ ] MFA mandatory for all admin and AWS console/API access
- [ ] Roles at minimum: Resident, RWA Admin, RWA Super Admin, Vendor/Agency User, Support, Platform Engineer, Auditor (read-only)
- [ ] Vendor accounts scoped to **only the complaints assigned to them**, with attachments accessible only while the ticket is open
- [ ] Contact details masked from vendors by default; call masking or a proxy number where feasible
- [ ] Time-bound and just-in-time access for engineering; break-glass access alerts the Grievance Officer
- [ ] Quarterly access review and immediate deprovisioning on exit or committee change
- [ ] **Every vendor and agency onboarded only after a signed data processing agreement** — confidentiality, purpose limitation, security, no onward disclosure, incident notification to you, deletion/return on exit, audit rights
- [ ] RWA administrators sign an acceptable-use and confidentiality undertaking before receiving admin access

## E.10 Logging and monitoring

- [ ] Application audit log for: login, failed login, admin actions, record views, exports, permission changes, complaint disclosures, consent changes, deletions
- [ ] Every log entry: actor, action, object, timestamp (UTC), source IP, result
- [ ] AWS CloudTrail, VPC Flow Logs, GuardDuty, AWS Config enabled
- [ ] Logs in a separate account or with restricted write access; tamper-evident
- [ ] **ICT system logs retained 180 days within India** where the CERT-In directions of 28 April 2022 apply — confirm applicability
- [ ] Bulk-export and unusual-access alerting

## E.11 Backup and continuity

- [ ] Automated encrypted backups; documented RPO and RTO
- [ ] Restore tested at least [quarterly], with a written test record
- [ ] Backup retention aligned to the retention schedule, and to the deletion policy
- [ ] Backups stored in-region unless cross-region replication is disclosed in clause 17

## E.12 Incident response

- [ ] Written incident response plan with defined severities and an on-call owner
- [ ] **Six-hour clock**: CERT-In reporting for specified incidents where applicable — pre-drafted report template, contact details on file, no discovery-day scrambling
- [ ] DPDP breach workflow: assess, contain, notify the Data Protection Board and affected residents in the manner and time the law requires
- [ ] Pre-drafted resident notification template, in English and Hindi
- [ ] Breach register maintained
- [ ] Post-incident review with remediation actions tracked to closure
- [ ] Tabletop exercise at least annually

## E.13 Governance items that are not code

- [ ] Signed agreement between [COMPANY] and the RWA allocating Data Fiduciary / Processor roles
- [ ] Record of processing activities (data map)
- [ ] DPIA before launching any new high-risk feature — advertising personalisation, location tracking, CCTV integration, visitor or staff management
- [ ] Staff privacy and security training, with a record
- [ ] Cyber liability and D&O insurance in place before launch
- [ ] **DLT registration** with an access provider for SMS sender IDs and templates, under the TRAI Telecom Commercial Communications Customer Preference Regulations, 2018 — transactional/service templates registered separately from promotional ones

---

# PART F — ITEMS THAT MUST BE CONFIRMED BY INDIAN LEGAL COUNSEL BEFORE PRODUCTION

## Entity, roles and relationships

1. **What is the operating entity?** Private limited company, LLP, proprietorship, or the RWA itself? Insert legal name, CIN/LLPIN, and registered office. Everything in clause 26 depends on there being a corporate entity to carry liability — a proprietorship gives you no limited liability at all.
2. **Which model in clause 10.1 is factually correct** — platform-led Data Fiduciary, processor for the RWA, or independent fiduciaries? This is the single most important question in this package. Confirm that the intended advertising model is compatible with the answer.
3. **Is the RWA a party to this document?** If yes, it must be named as a party, sign, and accept clause 26.3. If no, clauses 26.3, 26.4 and 27.2 must be restructured, because you cannot presently confer benefits on a non-party by drafting alone.
4. **Is the RWA legally constituted, and under which statute** — a state Societies Registration Act, a Co-operative Societies Act, an Apartment Owners Act, or as an association of allottees under RERA? Its constitution determines whether it can lawfully contract with you, delegate data handling, and bind residents.
5. **Written platform–RWA agreement**: scope, data roles, security obligations, allocation of liability, indemnities, exit and data-return terms, and who owns the resident database on termination.
6. **Who owns the resident database?** Answer this before launch, not at the point of a dispute.
7. **Does the company have authority to contract with residents directly**, or only through the RWA?

## Data protection

8. **Advertising model.** Confirm whether ads will ever be selected using resident data. If yes: separate consent design, DPIA, and an absolute rule against advertising directed at under-18s. If your commercial model routes advertiser revenue to RWA maintenance funds, confirm the tax, accounting and society-law treatment of that flow separately.
9. **Current status of the DPDP Rules** as at your launch date, and which obligations have commenced. The Rules were notified with phased transition periods; confirm what binds you on day one.
10. **Whether the company could be notified as a Significant Data Fiduciary**, and therefore whether a DPO, DPIA and independent audit are required. Do not name a "DPO" in clause 31.3 unless the appointment is real.
11. **Whether section 43A of the IT Act and the SPDI Rules, 2011 still apply** to you, given that the DPDP Act provides for the omission of section 43A on commencement of the relevant provision.
12. **Retention periods** for every row of the clause 20.2 table.
13. **Cross-border position**: confirm every AWS service, backup, log destination, monitoring tool and support arrangement, and delete clause 17.2 if nothing leaves India. Do not claim localisation you do not have.
14. **CERT-In directions of 28 April 2022** — applicability to your entity, the six-hour reporting obligation, the 180-day in-India log retention, and time synchronisation.
15. **Whether any identity document is collected** at onboarding. If the RWA wants Aadhaar for residents, staff or domestic workers, take advice before building it; there is no general authority for a private platform to collect and store Aadhaar numbers.
16. **Breach notification wording and timelines** as prescribed by the Rules in force at launch.
17. **Language requirements** for the notice, and which Eighth Schedule languages to publish.

## Platform status and content

18. **Is the company an "intermediary"** within the meaning of section 2(1)(w) of the IT Act, and is section 79 safe harbour available given that the Platform routes, categorises and moderates complaints? If it is available, confirm which Part II due-diligence obligations under the IT Rules, 2021 should be adopted — grievance officer, 24-hour acknowledgement, 15-day disposal, 36-hour takedown on order, 72-hour information response, 180-day retention after cancellation.
19. **Moderation policy** — how much editorial intervention is safe before the intermediary argument weakens.
20. **Defamation exposure and visibility architecture.** Confirm that complaints will be private-by-default. If any public or community-wide feed is planned, it needs its own review.
21. **POSH Act, 2013** — if complaints can involve harassment of or by staff, domestic workers or guards, confirm whether the RWA needs an Internal Committee, and how such a complaint must be routed off the platform to the correct forum. Do not let the app become the de facto sexual-harassment reporting channel without a designed path.

## Contract and disputes

22. **Jurisdiction**: insert the correct [CITY] and [STATE]. On your stated plan for Sushant Lok, Gurugram, that is likely Gurugram, Haryana — but it must follow the company's registered office or principal place of business, and be confirmed, not assumed.
23. **Whether to include the arbitration clause at all.** My recommendation is no, for the reasons under clause 32.5.
24. If arbitration is included, confirm the consumer carve-out is sufficient in light of the case law on non-arbitrability of consumer disputes.
25. **Liability cap floor amount** in clause 26.2(b). A nominal figure invites an unfairness challenge.
26. **Consumer Protection Act, 2019 analysis**: are residents "consumers" as against the company where the app is free to them and paid for by the RWA, and separately as against the RWA in respect of maintenance services? Then review every clause of Part 3 against the "unfair contract" definition.
27. **Enforceability of clause 26.4** given privity of contract, and whether the covenant-not-to-sue structure is the best available protection for founders and employees under Indian law.
28. **Directors' and officers' insurance and cyber liability insurance** — scope, limits, and whether the policy responds to a DPDP penalty.
29. **Indemnity in clause 27** — confirm the mutuality and the good-faith carve-out in 27.4 are adequate, and that the clause is not itself an unfair term.

## Product-specific

30. **The name.** "Anytime Help" implies round-the-clock assistance. Confirm with counsel whether the name, together with any marketing copy, creates a representation that increases exposure in an emergency-reliance claim, and whether a descriptive tagline should sit alongside it.
31. **Emergency disclaimer placement** — confirm it is prominent enough to be effective, and that no marketing material anywhere contradicts it.
32. **Any future feature** involving CCTV, visitor management, staff or domestic-worker records, gate passes, vehicle tracking, or payments will require a fresh review. Visitor and domestic-worker data is materially higher risk than resident complaint data, because those individuals never accepted your Terms.

---

*Prepared 30 August 2026. Draft for legal review. Not legal advice.*
