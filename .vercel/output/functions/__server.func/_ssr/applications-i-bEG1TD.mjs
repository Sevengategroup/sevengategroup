import { i as createServerFn } from "./server-CdqFUkkp.mjs";
import { t as createServerRpc } from "./createServerRpc-BQwYyHq7.mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/applications-i-bEG1TD.js
var submitApplication_createServerFn_handler = createServerRpc({
	id: "73d61aee52f588528a341b5fcc27302ee81d0568cc5d4930f05acd63b6bca368",
	name: "submitApplication",
	filename: "src/api/applications.ts"
}, (opts) => submitApplication.__executeServer(opts));
var submitApplication = createServerFn({ method: "POST" }).handler(submitApplication_createServerFn_handler, async ({ data }) => {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const formData = data;
		formData.get("jobId");
		const jobTitle = formData.get("jobTitle");
		const fullName = formData.get("fullName");
		const dob = formData.get("dob");
		const gender = formData.get("gender");
		const nationality = formData.get("nationality");
		const stateOfOrigin = formData.get("stateOfOrigin");
		const phone = formData.get("phone");
		const email = formData.get("email");
		const homeAddress = formData.get("homeAddress");
		const currentLocation = formData.get("currentLocation");
		const maritalStatus = formData.get("maritalStatus");
		const emergencyContactName = formData.get("emergencyContactName");
		const emergencyContactPhone = formData.get("emergencyContactPhone");
		const highestQualification = formData.get("highestQualification");
		const institutionName = formData.get("institutionName");
		const graduationYear = formData.get("graduationYear");
		const courseOfStudy = formData.get("courseOfStudy");
		const certifications = formData.get("certifications");
		const workExperience = formData.get("workExperience");
		const skills = formData.get("skills");
		const cvFile = formData.get("cv");
		if (!fullName || !email || !cvFile) throw new Error("Name, email, and CV are required.");
		const adminEmail = process.env.ADMIN_EMAIL || "ibrahimabdulosama@gmail.com";
		const fromEmail = process.env.RESEND_FROM_EMAIL || "careers@sevengategroup.com";
		const cvBuffer = Buffer.from(await cvFile.arrayBuffer());
		const emailText = `New Job Application: ${jobTitle}

--------------------------------------------------
1. PERSONAL INFORMATION
--------------------------------------------------
Full Name: ${fullName}
Date of Birth: ${dob || "N/A"}
Gender: ${gender || "N/A"}
Nationality: ${nationality || "N/A"}
State of Origin / LGA: ${stateOfOrigin || "N/A"}
Phone Number: ${phone || "N/A"}
Email Address: ${email}
Home Address: ${homeAddress || "N/A"}
Current Location: ${currentLocation || "N/A"}
Marital Status: ${maritalStatus || "N/A"}
Emergency Contact: ${emergencyContactName || "N/A"} (${emergencyContactPhone || "N/A"})

--------------------------------------------------
2. EDUCATION & WORK INFORMATION
--------------------------------------------------
Highest Qualification: ${highestQualification || "N/A"}
Institution Name: ${institutionName || "N/A"}
Year of Graduation: ${graduationYear || "N/A"}
Course of Study / Field: ${courseOfStudy || "N/A"}

Professional Certifications:
${certifications || "None provided"}

Work Experience (Company, Role, Duration, Responsibilities):
${workExperience || "None provided"}

Skills (Technical skills, Languages, Software tools):
${skills || "None provided"}

--------------------------------------------------
Please find the applicant's CV attached.`;
		const emailHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f5; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
  .header { background-color: #111111; color: #ffffff; padding: 30px; text-align: center; }
  .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
  .header p { margin: 10px 0 0; font-size: 14px; color: #a1a1aa; }
  .content { padding: 30px; }
  .section { margin-bottom: 30px; }
  .section-title { font-size: 14px; font-weight: 700; color: #4f46e5; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 2px solid #f4f4f5; padding-bottom: 8px; margin-bottom: 20px; }
  .field { margin-bottom: 15px; }
  .field-label { font-size: 12px; color: #71717a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: 600; }
  .field-value { font-size: 15px; color: #18181b; }
  .text-block { background: #f4f4f5; padding: 15px; border-radius: 6px; font-size: 14px; color: #3f3f46; white-space: pre-wrap; margin-top: 5px; border: 1px solid #e4e4e7; }
  .footer { background: #fafafa; padding: 20px; text-align: center; font-size: 13px; color: #a1a1aa; border-top: 1px solid #e4e4e7; }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Application</h1>
      <p>${jobTitle}</p>
    </div>
    <div class="content">
      
      <div class="section">
        <div class="section-title">Personal Information</div>
        <div class="field"><div class="field-label">Full Name</div><div class="field-value">${fullName}</div></div>
        <div class="field"><div class="field-label">Email Address</div><div class="field-value"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></div></div>
        <div class="field"><div class="field-label">Phone Number</div><div class="field-value">${phone || "N/A"}</div></div>
        <div class="field"><div class="field-label">Date of Birth</div><div class="field-value">${dob || "N/A"}</div></div>
        <div class="field"><div class="field-label">Gender</div><div class="field-value">${gender || "N/A"}</div></div>
        <div class="field"><div class="field-label">Nationality</div><div class="field-value">${nationality || "N/A"}</div></div>
        <div class="field"><div class="field-label">State of Origin / LGA</div><div class="field-value">${stateOfOrigin || "N/A"}</div></div>
        <div class="field"><div class="field-label">Marital Status</div><div class="field-value">${maritalStatus || "N/A"}</div></div>
        <div class="field"><div class="field-label">Current Location</div><div class="field-value">${currentLocation || "N/A"}</div></div>
        <div class="field"><div class="field-label">Home Address</div><div class="field-value">${homeAddress || "N/A"}</div></div>
        <div class="field"><div class="field-label">Emergency Contact</div><div class="field-value">${emergencyContactName || "N/A"} (${emergencyContactPhone || "N/A"})</div></div>
      </div>

      <div class="section">
        <div class="section-title">Education & Work</div>
        <div class="field"><div class="field-label">Highest Qualification</div><div class="field-value">${highestQualification || "N/A"}</div></div>
        <div class="field"><div class="field-label">Institution Name</div><div class="field-value">${institutionName || "N/A"}</div></div>
        <div class="field"><div class="field-label">Course of Study</div><div class="field-value">${courseOfStudy || "N/A"}</div></div>
        <div class="field"><div class="field-label">Year of Graduation</div><div class="field-value">${graduationYear || "N/A"}</div></div>
        
        <div class="field">
          <div class="field-label">Professional Certifications</div>
          <div class="text-block">${certifications || "None provided"}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Work Experience</div>
          <div class="text-block">${workExperience || "None provided"}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Skills</div>
          <div class="text-block">${skills || "None provided"}</div>
        </div>
      </div>

    </div>
    <div class="footer">
      This application was submitted via the Sevengate Careers portal.<br>
      The applicant's CV is attached to this email.
    </div>
  </div>
</body>
</html>
      `;
		const { data: resendData, error } = await resend.emails.send({
			from: `Sevengate Careers <${fromEmail}>`,
			replyTo: email,
			to: [adminEmail],
			subject: `New Job Application: ${jobTitle} - ${fullName}`,
			text: emailText,
			html: emailHtml,
			attachments: [{
				filename: cvFile.name,
				content: cvBuffer
			}]
		});
		if (error) {
			console.error("Resend API Error:", error);
			throw new Error(error.message);
		}
		return { success: true };
	} catch (error) {
		console.error("Error submitting application:", error);
		throw new Error(error.message || "Failed to submit application");
	}
});
//#endregion
export { submitApplication_createServerFn_handler };
