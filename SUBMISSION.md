# Project Submission

## How to Submit

### Option 1: Git Repository (Recommended)
1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: NestJS RabbitMQ JWT Service implementation"
   ```

2. Create a repository on GitHub/GitLab/Bitbucket

3. Push the code:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

4. Send the repository link to the interviewer

### Option 2: ZIP Archive
1. Create a ZIP file of the entire project folder
2. Make sure to exclude:
   - `node_modules/` (already in .gitignore)
   - `dist/` (already in .gitignore)
   - `.env` files (already in .gitignore)

3. Send the ZIP file via email or file sharing service

## What to Include in Your Message

**Subject:** Test Task - NestJS RabbitMQ JWT Service

**Message Template:**
```
გამარჯობა,

დავალება დასრულებულია. პროექტი მზადაა ტესტირებისთვის.

პროექტის მახასიათებლები:
- ✅ NestJS microservices architecture
- ✅ RabbitMQ RPC pattern implementation
- ✅ Docker Compose orchestration
- ✅ DTO validation
- ✅ JWT token management (1 hour expiration)
- ✅ Error handling

გაშვება:
docker-compose up --build

API Endpoints:
- POST /auth/sign - JWT token generation
- POST /auth/decode - JWT token validation

დეტალური ინსტრუქციები README.md-შია.

პროექტის ლინკი: [GitHub/GitLab link ან ZIP file]

მადლობა,
გიორგი
```

## Key Points to Highlight

1. **Clean Architecture**: Well-organized code structure
2. **Best Practices**: DTO validation, error handling, proper separation of concerns
3. **Docker Ready**: Easy deployment with Docker Compose
4. **Documentation**: Complete README and usage documentation
5. **Production Ready**: No comments, clean code, proper configuration

## Before Submission Checklist

- [x] All code is clean (no comments)
- [x] All tests pass
- [x] Documentation is complete
- [x] Docker Compose works
- [x] No unnecessary files
- [x] Code follows NestJS best practices
- [x] Error handling is implemented
- [x] DTO validation is working

