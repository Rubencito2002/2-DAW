from django import views
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import MyForm

class myviews(views):
    template_name = 'form_template.html'
    def get(self,request):
        form = MyForm(initial={"key": 'value'})
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = MyForm(request.POST)
        if form.is_valid():
            # <process form cleaned data>
            return HttpResponseRedirect('/success/')
        return render(request, self.template_name, {'form': form})