from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Profile, Skill, Project, Experience, Testimonial, Research, ContactMessage, AcademicProject


# Create your views here.
def home(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        ContactMessage.objects.create(name=name, email=email, message=message)
        
        messages.success(request, 'Your message has been sent!')
        
        return redirect('home')
    
    context = {
        "profile": Profile.objects.first(),
        'skills': Skill.objects.filter(is_visible=True),
        "projects": Project.objects.all().order_by('-created_at'),
        'academic_projects': AcademicProject.objects.all(),
        "experiences": Experience.objects.all(),
        "testimonials": Testimonial.objects.all(),
        "research": Research.objects.all().order_by('-created_at'),
    }
    return render(request, "portfolio/index.html", context)