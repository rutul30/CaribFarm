from django import forms
from .models import Member

class MemberForm(forms.ModelForm):
    class Meta:
        model = Member
        fields = ['fname','lname','email','account_id']
    # name = forms.CharField()
    # email = forms.CharField()
    # account_id = forms.CharField()