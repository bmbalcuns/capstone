# Generated by Django 3.1.1 on 2020-09-15 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kib_app', '0008_auto_20200910_1030'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='drink',
            options={'ordering': ['name']},
        ),
    ]