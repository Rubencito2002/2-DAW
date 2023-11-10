from django import views
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import MyForm

class myviews(views):
    def post(self, request):
        form = MyForm(request.POST)
        if form.is_valid():
            return HttpResponseRedirect('/success/')