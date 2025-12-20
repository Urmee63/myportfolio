from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=120)
    short_intro = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    about_image = models.ImageField(upload_to='about/', blank=True, null=True)
    hero_background = models.ImageField(upload_to='hero/', blank=True, null=True)
    resume_en = models.FileField(upload_to='resume/en/', blank=True, null=True, verbose_name="Resume (English)")
    resume_de = models.FileField(upload_to='resume/de/', blank=True, null=True, verbose_name="Resume (German)")
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    def __str__(self):
        return f"{self.name}"

class AboutImage(models.Model):
    profile = models.ForeignKey(Profile, related_name='about_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='about/')
    
    def __str__(self):
        return f"About Image for {self.profile.name}"

class Skill(models.Model):
    name = models.CharField(max_length=50)
    level = models.CharField(max_length=50, blank=True)
    is_visible = models.BooleanField(default=True, help_text="Uncheck if this is just a project tag")

    def __str__(self):
        return f"{self.name}"


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    tech_stack = models.ManyToManyField(Skill, blank=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    github_link = models.URLField(blank=True)
    live_demo = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"

class AcademicProject(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    tech_stack = models.ManyToManyField(Skill, blank=True)
    image = models.ImageField(upload_to='academic_projects/', blank=True, null=True)
    github_link = models.URLField(blank=True)
    live_demo = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"

class Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=120)
    duration = models.CharField(max_length=50)
    details = models.TextField(blank=True)
    company_logo = models.ImageField(upload_to='company_logos/', blank=True, null=True)
    company_website = models.URLField(blank=True)

    def __str__(self):
        return f"{self.role} @ {self.company}"

class Research(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    tech_stack = models.ManyToManyField(Skill, blank=True)
    published_in = models.CharField(max_length=100, blank=True)
    publisher = models.CharField(max_length=100, blank=True)
    link = models.URLField(blank=True)
    image = models.ImageField(upload_to='research/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Testimonial(models.Model):
    author = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return f"{self.author}"
    
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
