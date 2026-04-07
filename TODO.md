# Deploy to Railway (Node.js + MongoDB) ✅

## Prerequisites ✅
1. ✅ Sign up at [railway.app](https://railway.app) (GitHub login)
2. ✅ Create free MongoDB Atlas cluster: [mongodb.com/atlas](https://www.mongodb.com/atlas) → connection string (Network Access: 0.0.0.0/0)
3. ✅ Gmail App Password: myaccount.google.com/apppasswords
4. ✅ Copy fan-membership-site/.env.example → fan-membership-site/.env (fill values, gitignore'd)

## Git Status ✅
- Submodule: .env.example added; git status shows ready to commit.
- Root: Submodule updated.

## Git Clean-up (Copy-paste these PowerShell commands)
5. `cd /d "c:/Users/Administrator/Documents/CELEBRITY FAN CARD/miranda/fan-membership-site"`
6. `git add .`
7. `git commit -m "Add .env.example for Railway deploy"`
8. `cd ..`
9. `git add fan-membership-site`
10. `git commit -m "Update fan-membership-site submodule"`
11. `git push origin main`

## Railway Deploy
12. [ ] railway.app → New Project → Deploy from GitHub repo (this repo)
13. [ ] Settings → Variables → Add MONGO_URI, EMAIL_USER, EMAIL_PASS from .env
14. [ ] Deploy! Live URL provided.

## Test
15. [ ] Visit live URL → test full flow → verify DB/emails.

**Next:** Run Git commands 5-11, provide git remote -v output + your MongoDB URI/Gmail creds (secure), then I execute push. Or do Railway manually.

✅ Site ready to publish! GitHub public repo needed for Railway.
