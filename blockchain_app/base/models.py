from django.db import models

# Create your models here.

class Member(models.Model):
    fname = models.CharField(max_length = 100)
    lname = models.CharField(max_length =100)
    email = models.EmailField()
    account_id = models.CharField(max_length = 70)

    def __str__(self):
        return self.fname +" " + self.lname
