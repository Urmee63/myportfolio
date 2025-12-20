from django.contrib import admin
from .models import Profile, Skill, Project, Experience, Testimonial, Research, ContactMessage, AboutImage, AcademicProject

# Create an Inline Admin for the images
class AboutImageInline(admin.TabularInline):
    model = AboutImage
    extra = 1  # Number of empty upload boxes to show by default

# Update the Profile Admin to include the Inline
class ProfileAdmin(admin.ModelAdmin):
    inlines = [AboutImageInline]

# Register your models here.
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Experience)
admin.site.register(Research)
admin.site.register(Testimonial)
admin.site.register(ContactMessage)
admin.site.register(AcademicProject)
